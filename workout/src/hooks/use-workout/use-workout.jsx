import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useServerRequest } from '../use-server-request';
import { selectAuthUser, selectWorkoutData } from '../../selectors';
import { useWorkoutData } from './use-workout-data';
import { useExerciseResults } from './use-exercise-results';
import { useRestTimer } from './use-rest-timer';
import { saveWorkoutAsync, updateUserProgressAsync } from '../../actions';
import { getNextWorkout } from '../../utils';

export function useWorkout() {
	const { level, week, day } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectAuthUser);
	const completedWorkouts = useSelector(selectWorkoutData);
	const requestServer = useServerRequest();

	const { workoutData, loading } = useWorkoutData(level, week, day);

	const { exerciseResults, setExerciseResult, isAllCompleted } =
		useExerciseResults(workoutData?.exercises);

	const {
		restTime,
		isRestTimerRunning,
		startRestTimer,
		pauseRestTimer,
		resetRestTimer,
	} = useRestTimer();

	const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

	const completeWorkout = async () => {
		if (!user || !workoutData) return;

		const workoutResult = {
			userId: user.id,
			program: { level, week: +week, day: +day },
			exercises: workoutData.exercises.map((ex, idx) => ({
				name: ex.name,
				sets: Object.values(exerciseResults[idx] || {}).map(
					(s) => s.reps || 0,
				),
				targetReps: ex.reps,
				targetSets: ex.sets,
			})),
			duration: restTime,
			completed: true,
		};

		try {
			await dispatch(saveWorkoutAsync(requestServer, workoutResult));
			const updatedUser = {
				...user,
				currentProgram: level,
				currentWeek: +week,
				currentDay: +day,
			};

			const updatedCompletedWorkouts = [
				...completedWorkouts,
				updatedUser,
			];
			const nextWorkout = getNextWorkout(
				updatedUser,
				updatedCompletedWorkouts,
			);

			await dispatch(
				updateUserProgressAsync(
					requestServer,
					nextWorkout.nextProgram,
					nextWorkout.nextWeek,
					nextWorkout.nextDay,
				),
			);
			navigate('/dashboard');
		} catch (err) {
			alert(`Ошибка сохранения: ${err.message || err}`);
		}
	};

	return {
		loading,
		user,
		workoutData,
		currentExerciseIndex,
		setCurrentExerciseIndex,
		exerciseResults,
		onSetResult: setExerciseResult,
		restTime,
		isRestTimerRunning,
		onStartRestTimer: startRestTimer,
		onPauseRestTimer: pauseRestTimer,
		onResetRestTimer: resetRestTimer,
		onCompleteWorkout: completeWorkout,
		onBack: () => navigate(-1),
		onGoToDashboard: () => navigate('/dashboard'),
		isAllCompleted,
	};
}
