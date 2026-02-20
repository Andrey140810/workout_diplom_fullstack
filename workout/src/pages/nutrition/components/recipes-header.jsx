import styled from 'styled-components';
import { mealNames } from '../../../constants';
import {
	BackRecipesButton,
	MealsSelector,
	MealsSelectorButton,
	RecipesHeaderLeft,
	RecipesTitle,
} from './styles/nutrition-styles';

const RecipesHeaderContainer = ({
	className,
	setSelectedMealType,
	selectedMealType,
	mealsPerDay,
	setMealsPerDay,
}) => {
	return (
		<div className={className}>
			<RecipesHeaderLeft>
				{selectedMealType && (
					<BackRecipesButton
						onClick={() => setSelectedMealType(null)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Назад ко всем рецептам
					</BackRecipesButton>
				)}
				<RecipesTitle>
					Рецепты: {mealNames[selectedMealType]}
				</RecipesTitle>
			</RecipesHeaderLeft>
			<MealsSelector>
				<span>Приемов пищи в день:</span>
				<MealsSelectorButton
					className={mealsPerDay === 3 ? 'active' : ''}
					onClick={() => {
						setMealsPerDay(3);
						setSelectedMealType(null);
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					3
				</MealsSelectorButton>
				<MealsSelectorButton
					className={mealsPerDay === 4 ? 'active' : ''}
					onClick={() => {
						setMealsPerDay(4);
						setSelectedMealType(null);
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					4
				</MealsSelectorButton>
				<MealsSelectorButton
					className={mealsPerDay === 5 ? 'active' : ''}
					onClick={() => {
						setMealsPerDay(5);
						setSelectedMealType(null);
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					5
				</MealsSelectorButton>
			</MealsSelector>
		</div>
	);
};

export const RecipesHeader = styled(RecipesHeaderContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	flex-wrap: wrap;
	gap: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
`;
