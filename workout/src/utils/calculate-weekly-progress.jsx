export const calculateWeeklyProgress = (workouts) => {
	const now = new Date();
	const dayOfWeek = now.getDay();
	const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
	const monday = new Date(now);
	monday.setDate(now.getDate() - daysSinceMonday);
	monday.setHours(0, 0, 0, 0);
	const days = [];

	for (let i = 0; i < 7; i++) {
		const date = new Date(monday);
		date.setDate(monday.getDate() + i);
		const isoDate = date.toISOString().split('T')[0];
		days.push({ date: isoDate, workouts: 0 });
	}

	const workoutCountByDate = {};
	workouts.forEach((w) => {
		const d = new Date(w.completedAt || w.createdAt);
		d.setHours(0, 0, 0, 0);
		const key = d.toISOString().split('T')[0];
		workoutCountByDate[key] = (workoutCountByDate[key] || 0) + 1;
	});

	return days.map((day) => ({
		...day,
		workouts: workoutCountByDate[day.date] || 0,
	}));
};
