export const getGoalDescription = (goal) => {
	const description = {
		loseWeight: 'Похудение (дефицит калорий 15%)',
		maintain: 'Поддержание веса',
		gainWeight: 'Набор массы (профицит калорий 15%)',
	};

	return description[goal] || '';
};
