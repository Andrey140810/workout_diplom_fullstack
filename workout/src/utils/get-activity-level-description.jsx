export const getActivityLevelDescription = (level) => {
	const description = {
		sedentary: 'Сидячий образ жизни, минимум физической активности',
		light: 'Легкая активность (1-3 тренировки/нед)',
		moderate: 'Умеренная активность (3-5 тренировки/нед)',
		active: 'Высокая активность (6-7 тренировок в неделю)',
		veryActive:
			'Очень высокая активность (2 тренировки в день или тяжелая физическая работа)',
	};

	return description[level] || '';
};
