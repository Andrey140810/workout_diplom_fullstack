import { getWorkoutProgram } from './get-workout-program';

export const getNextWorkout = (user, completedWorkouts = []) => {
	if (!user || !user.currentProgram) {
		return { nextProgram: 'beginner', nextWeek: 1, nextDay: 1 };
	}

	const program = getWorkoutProgram(user.currentProgram);

	const completedSet = new Set();
	completedWorkouts.forEach((workout) => {
		if (workout.program && workout.program.level && workout.completed) {
			if (workout.program.level === user.currentProgram) {
				const key = `${workout.program.week}-${workout.program.day}`;
				completedSet.add(key);
			}
		}
	});

	const isWorkoutCompleted = (week, day) => {
		const key = `${week}-${day}`;
		return completedSet.has(key);
	};

	let lastCompletedWeek = 0;
	let lastCompletedDay = 0;

	completedWorkouts.forEach((workout) => {
		if (
			workout.program &&
			workout.program.level === user.currentProgram &&
			workout.completed
		) {
			const week = workout.program.week;
			const day = workout.program.day;

			if (
				week > lastCompletedWeek ||
				(week === lastCompletedWeek && day > lastCompletedDay)
			) {
				lastCompletedWeek = week;
				lastCompletedDay = day;
			}
		}
	});

	let startWeek = lastCompletedWeek || user.currentWeek || 1;
	let startDay = lastCompletedDay || user.currentDay || 1;

	let startWeekIndex = program.weeks.findIndex((w) => w.week === startWeek);
	if (startWeekIndex === -1) {
		startWeekIndex = 0;
		startWeek = program.weeks[0]?.week || 1;
		startDay = 1;
	}

	for (
		let weekIndex = startWeekIndex;
		weekIndex < program.weeks.length;
		weekIndex++
	) {
		const week = program.weeks[weekIndex];

		let dayStartIndex = 0;
		if (week.week === startWeek) {
			const foundIndex = week.days.findIndex((d) => d.day >= startDay);
			dayStartIndex = foundIndex >= 0 ? foundIndex : 0;
		}

		for (
			let dayIndex = dayStartIndex;
			dayIndex < week.days.length;
			dayIndex++
		) {
			const day = week.days[dayIndex];

			if (!day.exercises || day.exercises.length === 0) {
				continue;
			}

			if (!isWorkoutCompleted(week.week, day.day)) {
				return {
					nextProgram: user.currentProgram,
					nextWeek: week.week,
					nextDay: day.day,
				};
			}
		}
	}

	const lastWeek = program.weeks[program.weeks.length - 1];
	const lastDayWithExercises = [...lastWeek.days]
		.reverse()
		.find((d) => d.exercises && d.exercises.length > 0);

	if (lastDayWithExercises) {
		return {
			nextProgram: user.currentProgram,
			nextWeek: lastWeek.week,
			nextDay: lastDayWithExercises.day,
		};
	}

	return {
		nextProgram: user.currentProgram,
		nextWeek: 1,
		nextDay: 1,
	};
};
