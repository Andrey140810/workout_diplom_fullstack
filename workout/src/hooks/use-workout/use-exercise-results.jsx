import { useState, useCallback } from 'react';

export const useExerciseResults = (exercises) => {
	const [results, setResults] = useState({});

	const setExerciseResult = useCallback((exerciseIdx, setIdx, reps) => {
		setResults((prev) => ({
			...prev,
			[exerciseIdx]: {
				...prev[exerciseIdx],
				[setIdx]: { reps },
			},
		}));
	}, []);

	const isAllCompleted = exercises?.every((_, idx) => {
		const res = results[idx];
		if (!res) return false;
		return Object.values(res).every((set) => set?.reps != null);
	});

	return {
		exerciseResults: results,
		setExerciseResult,
		isAllCompleted,
	};
};
