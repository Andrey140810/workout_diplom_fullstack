import { workoutPrograms } from '../data/workoutPrograms';

export function getWorkoutProgram(level) {
	return workoutPrograms[level] || workoutPrograms.beginner;
}
