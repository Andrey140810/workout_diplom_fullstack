import { useState, useEffect, useRef, useCallback } from 'react';

export const useRestTimer = () => {
	const [elapsed, setElapsed] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const startTimeRef = useRef(null);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isRunning) return;

		startTimeRef.current = Date.now() - elapsed;

		intervalRef.current = setInterval(() => {
			setElapsed(Date.now() - startTimeRef.current);
		}, 250);
		return () => clearInterval(intervalRef.current);
	}, [isRunning, elapsed]);

	const start = useCallback(() => setIsRunning(true), []);
	const pause = useCallback(() => setIsRunning(false), []);
	const reset = useCallback(() => {
		setIsRunning(false);
		setElapsed(0);
	}, []);

	return {
		restTime: Math.floor(elapsed / 1000),
		isRestTimerRunning: isRunning,
		startRestTimer: start,
		pauseRestTimer: pause,
		resetRestTimer: reset,
	};
};
