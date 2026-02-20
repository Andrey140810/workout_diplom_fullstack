export const calculateStreak = (workouts) => {
	if (workouts.length === 0) return 0;

	const sorted = [...workouts].sort((a, b) => {
		const dateA = new Date(a.completedAt || a.createdAt);
		const dateB = new Date(b.completedAt || b.createdAt);
		return dateB - dateA;
	});

	let streak = 1;
	let lastDate = new Date(sorted[0].completedAt || sorted[0].createdAt);
	lastDate.setHours(0, 0, 0, 0);

	for (let i = 1; i < sorted.length; i++) {
		const currentDate = new Date(
			sorted[i].completedAt || sorted[i].createdAt,
		);
		currentDate.setHours(0, 0, 0, 0);

		const expectedDate = new Date(lastDate);
		expectedDate.setDate(expectedDate.getDate() - 1);

		if (currentDate.getTime() === lastDate.getTime()) {
			continue;
		} else if (currentDate.getTime() === expectedDate.getTime()) {
			streak++;
			lastDate = currentDate;
		} else {
			break;
		}
	}

	return streak;
};
