import { mealNames } from '../../../constants';
import { getMealPlan } from '../../../data/recipes';
import { RecipeCard } from './recipe-card';
import { RecipesHeader } from './recipes-header';
import {
	MealCategory,
	MealCategoryFull,
	MealCategoryIcon,
	MealCategoryTitle,
	RecipesGrid,
	RecipesList,
	RecipesSection,
	ShowMoreButton,
} from './styles/nutrition-styles';

export const RecipesView = ({
	mealsPerDay,
	setMealsPerDay,
	selectedMealType,
	setSelectedMealType,
}) => {
	const mealPlan = getMealPlan(mealsPerDay);

	const handleShowMore = (mealType) => {
		setSelectedMealType(mealType);
		setTimeout(() => {
			const element = document.getElementById(`meal-type-${mealType}`);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	};

	if (selectedMealType) {
		const selectedMeal = mealPlan.find((m) => m.type === selectedMealType);
		if (!selectedMeal) return null;

		return (
			<RecipesSection>
				<RecipesHeader
					mealsPerDay={mealsPerDay}
					setMealsPerDay={setMealsPerDay}
					selectedMealType={selectedMealType}
					setSelectedMealType={setSelectedMealType}
				/>
				<MealCategoryFull>
					<MealCategoryTitle>
						<MealCategoryIcon>🍽️</MealCategoryIcon>
						{mealNames[selectedMealType]}
					</MealCategoryTitle>
					<RecipesList>
						{selectedMeal.recipes.map((recipe) => (
							<RecipeCard key={recipe.id} recipe={recipe} />
						))}
					</RecipesList>
				</MealCategoryFull>
			</RecipesSection>
		);
	}

	return (
		<RecipesSection>
			<RecipesHeader
				mealsPerDay={mealsPerDay}
				setMealsPerDay={setMealsPerDay}
				selectedMealType={selectedMealType}
				setSelectedMealType={setSelectedMealType}
			/>
			<RecipesGrid>
				{mealPlan.map((meal, idx) => {
					const displayedRecipes = meal.recipes.slice(0, 3);
					const remainingCount = meal.recipes.length - 3;

					return (
						<MealCategory key={idx}>
							<MealCategoryTitle>
								<MealCategoryIcon>🍽️</MealCategoryIcon>
								{mealNames[meal.type]}
							</MealCategoryTitle>
							<RecipesList>
								{displayedRecipes.map((recipe) => (
									<RecipeCard
										key={recipe.id}
										recipe={recipe}
									/>
								))}
								{remainingCount > 0 && (
									<ShowMoreButton
										onClick={() =>
											handleShowMore(meal.type)
										}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Показать все рецепты (
										{meal.recipes.length})
									</ShowMoreButton>
								)}
							</RecipesList>
						</MealCategory>
					);
				})}
			</RecipesGrid>
		</RecipesSection>
	);
};
