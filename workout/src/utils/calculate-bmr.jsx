// BMR - Basic Metabolic Rate - базовый метаболизм

export const calculateBMR = (weight, height, age, gender) => {
	if (gender === 'male') {
		return 10 * weight + 6.25 * height - 5 * age + 5;
	} else {
		return 10 * weight + 6.25 * height - 5 * age - 161;
	}
};
