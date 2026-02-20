import { calculateBMR } from './calculate-bmr';
import { calculateTDEE } from './calculate-tdee';

export const calculateCalories = (
	weight,
	height,
	age,
	gender,
	activityLevel,
	goal,
) => {
	const bmr = calculateBMR(weight, height, age, gender);
	const tdee = calculateTDEE(bmr, activityLevel);

	const goalMultipliers = {
		loseWeight: 0.85, // похудение
		maintain: 1.0, // поддержание
		gainWeight: 1.15, // набор массы
	};

	const dailyCalories = Math.round(tdee * (goalMultipliers[goal] || 1.0));

	let protein, carbs, fat;

	if (goal === 'loseWeight') {
		protein = Math.round(weight * 2.2);
		fat = Math.round((dailyCalories * 0.25) / 9);
		carbs = Math.round((dailyCalories - protein * 4 - fat * 9) / 4);
	} else if (goal === 'gainWeight') {
		protein = Math.round(weight * 2.0);
		fat = Math.round((dailyCalories * 0.25) / 9);
		carbs = Math.round((dailyCalories - protein * 4 - fat * 9) / 4);
	} else {
		protein = Math.round(weight * 1.8);
		fat = Math.round((dailyCalories * 0.3) / 9);
		carbs = Math.round((dailyCalories - protein * 4 - fat * 9) / 4);
	}

	return {
		bmr: Math.round(bmr),
		tdee: Math.round(tdee),
		dailyCalories,
		macros: {
			protein,
			carbs,
			fat,
			proteinCalories: protein * 4,
			carbsCalories: carbs * 4,
			fatCalories: fat * 9,
		},
	};
};
