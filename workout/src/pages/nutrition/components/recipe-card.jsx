import { useState } from 'react';
import {
	ExpandButton,
	RecipeCardContainer,
	RecipeDetails,
	RecipeHeaderContainer,
	RecipeIcon,
	RecipeInfo,
	RecipeIngredients,
	RecipeIngredientsList,
	RecipeIngredientsTitle,
	RecipeInstructions,
	RecipeInstructionsText,
	RecipeInstructionsTitle,
	RecipeMacros,
	RecipeName,
	RecipeStats,
	RecipeTitleRow,
} from './styles/nutrition-styles';

export const RecipeCard = ({ recipe }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<RecipeCardContainer onClick={() => setExpanded(!expanded)}>
			<RecipeHeaderContainer>
				<RecipeTitleRow>
					<RecipeIcon>{recipe.image}</RecipeIcon>
					<RecipeName>{recipe.name}</RecipeName>
				</RecipeTitleRow>
				<ExpandButton
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{expanded ? '−' : '+'}
				</ExpandButton>
			</RecipeHeaderContainer>
			<RecipeInfo>
				<RecipeStats>
					<span>🔥 {recipe.calories} ккал</span>
					<span>⏱️ {recipe.time}</span>
				</RecipeStats>
				<RecipeMacros>
					<span>Б: {recipe.protein}г</span>
					<span>У: {recipe.carbs}г</span>
					<span>Ж: {recipe.fat}г</span>
				</RecipeMacros>
			</RecipeInfo>
			{expanded && (
				<RecipeDetails>
					<RecipeIngredients>
						<RecipeIngredientsTitle>
							Ингридиенты
						</RecipeIngredientsTitle>
						<RecipeIngredientsList>
							{recipe.ingredients.map((ingredient, idx) => (
								<li key={idx}>{ingredient}</li>
							))}
						</RecipeIngredientsList>
					</RecipeIngredients>
					<RecipeInstructions>
						<RecipeInstructionsTitle>
							Приготовление
						</RecipeInstructionsTitle>
						<RecipeInstructionsText>
							{recipe.instructions}
						</RecipeInstructionsText>
					</RecipeInstructions>
				</RecipeDetails>
			)}
		</RecipeCardContainer>
	);
};
