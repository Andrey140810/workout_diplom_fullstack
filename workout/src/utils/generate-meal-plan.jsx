import { getMealPlan } from '../data/recipes';

export const generateMealPlan = (targetCalories, mealsPerDay) => {
	const mealPlan = getMealPlan(mealsPerDay);

	const calorieDistribution = {
		3: { breakfast: 0.35, lunch: 0.4, dinner: 0.25 },
		4: { breakfast: 0.3, secondBreakfast: 0.15, lunch: 0.35, dinner: 0.2 },
		5: {
			breakfast: 0.25,
			secondBreakfast: 0.15,
			lunch: 0.3,
			snack: 0.1,
			dinner: 0.2,
		},
	};

	const distribution = calorieDistribution[mealsPerDay];
	const deviation = 0.15;

	const plan = mealPlan.map((meal) => {
		const mealType = meal.type;
		const targetMealCalories =
			targetCalories * (distribution[mealType] || 0.3);

		const suitableRecipes = meal.recipes.filter((r) => {
			const minCalories = targetMealCalories * (1 - deviation);
			const maxCalories = targetMealCalories * (1 + deviation);
			return r.calories >= minCalories && r.calories <= maxCalories;
		});

		let selectedRecipe;
		if (suitableRecipes.length > 0) {
			selectedRecipe =
				suitableRecipes[
					Math.floor(Math.random() * suitableRecipes.length)
				];
		} else {
			selectedRecipe = meal.recipes.reduce((closest, current) => {
				const currentDiff = Math.abs(
					current.calories - targetMealCalories,
				);
				const closestDiff = Math.abs(
					closest.calories - targetMealCalories,
				);
				return currentDiff < closestDiff ? current : closest;
			});
		}

		return {
			...selectedRecipe,
			mealType: mealType,
			targetCalories: Math.round(targetMealCalories),
		};
	});

	const totalCalories = plan.reduce((sum, meal) => sum + meal.calories, 0);
	const totalProtein = plan.reduce((sum, meal) => sum + meal.protein, 0);
	const totalCarbs = plan.reduce((sum, meal) => sum + meal.carbs, 0);
	const totalFat = plan.reduce((sum, meal) => sum + meal.fat, 0);

	return {
		meals: plan,
		totalCalories: totalCalories,
		totalProtein: totalProtein,
		totalCarbs: totalCarbs,
		totalFat: totalFat,
		targetCalories: targetCalories,
		difference: totalCalories - targetCalories,
	};
};
