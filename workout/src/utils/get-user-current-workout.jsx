import { getWorkoutProgram } from './get-workout-program';
import { getNextWorkout } from './get-next-workout';

export const getUserCurrentWorkout = (user, completedWorkouts = []) => {
	if (!user) return;

	const nextWorkout = getNextWorkout(user, completedWorkouts);

	const currentProgram = getWorkoutProgram(nextWorkout.nextProgram);
	const currentWeek =
		currentProgram.weeks.find((w) => w.week === nextWorkout.nextWeek) ||
		currentProgram.weeks[0];
	const currentDay =
		currentWeek.days.find((d) => d.day === nextWorkout.nextDay) ||
		currentWeek.days[0];

	return {
		currentDay,
		currentWeek,
		currentProgram,
	};
};
