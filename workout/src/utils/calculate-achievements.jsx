export const calculateAchievements = (
	totalWorkouts,
	totalExercises,
	totalRepeads,
) => {
	const achievements = [];

	if (totalWorkouts >= 5)
		achievements.push({ name: '5 тренировок', icon: '⭐' });
	if (totalWorkouts >= 20)
		achievements.push({ name: '20 тренировок', icon: '🏅' });
	if (totalRepeads >= 500)
		achievements.push({ name: '500 повторений', icon: '🔄' });
	if (totalRepeads >= 2000)
		achievements.push({ name: '2000 повторений', icon: '💥' });
	if (totalExercises >= 200)
		achievements.push({ name: '200 упражнений', icon: '🔥' });

	return achievements;
};
