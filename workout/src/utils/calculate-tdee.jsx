// TDEE - Total Daily Energy Expenditure - общий расход энергии

export const calculateTDEE = (bmr, activityLevel) => {
	const multipliers = {
		sedentary: 1.2,
		light: 1.375,
		moderate: 1.55,
		active: 1.725,
		veryActive: 1.9,
	};

	return bmr * (multipliers[activityLevel] || 1.2);
};
