export const formatWorkoutRepeads = (workout) => {
	if (!workout?.exercises || !Array.isArray(workout.exercises)) return 0;

	const totalRepeads = workout.exercises.reduce((exSum, exercise) => {
		if (!exercise?.sets || !Array.isArray(exercise.sets)) return exSum;
		return (
			exSum +
			exercise.sets.reduce((setSum, reps) => {
				const num = Number(reps);
				return Number.isNaN(num) ? setSum : setSum + num;
			}, 0)
		);
	}, 0);

	return totalRepeads;
};
