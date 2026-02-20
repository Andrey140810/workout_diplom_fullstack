import { motion } from 'motion/react';
import styled from 'styled-components';
import { Button, ButtonSecondary, Card, CardDark } from '../../../components';

export const RecipesSection = styled.div`
	margin-top: 2rem;
`;

export const RecipesHeaderLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const RecipesTitle = styled.h2`
	font-size: 1.75rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const BackRecipesButton = styled(ButtonSecondary)`
	align-self: flex-start;
`;

export const MealsSelector = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${(props) => props.theme.colors.textSecondary};

	@media (max-width: 768px) {
		flex-wrap: wrap;
		width: 100%;
	}
`;

export const MealsSelectorButton = styled(motion.button)`
	padding: 0.5rem 1rem;
	background: ${(props) => props.theme.colors.bgCard};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	color: ${(props) => props.theme.colors.textSecondary};
	cursor: pointer;
	transition: all 0.2s ease;

	&.active {
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
		color: white;
	}

	@media (max-width: 768px) {
		padding: 0.4rem 0.8rem;
		font-size: 0.85rem;
		flex: 1 1 auto;
		min-width: 60px;
	}
`;

export const RecipesGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const MealCategory = styled(Card)`
	@media (max-width: 768px) {
		padding: 1.5rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const MealCategoryFull = styled(Card)`
	@media (max-width: 768px) {
		padding: 1.5rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const MealCategoryTitle = styled.h3`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MealCategoryIcon = styled.span`
	font-size: 1.75rem;
`;

export const RecipesList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const ShowMoreButton = styled(motion.button)`
	width: 100%;
	padding: 1rem;
	background: ${(props) => props.theme.colors.bgDark};
	border: 2px dashed rgba(64, 224, 208, 0.3);
	border-radius: 12px;
	color: ${(props) => props.theme.colors.primary};
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	margin-top: 0.5rem;

	&:hover {
		background: rgba(64, 224, 208, 0.1);
		border-color: ${(props) => props.theme.colors.primary};
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(64, 224, 208, 0.2);
	}
`;

export const RecipeCardContainer = styled(CardDark)`
	cursor: pointer;
	transition: all 0.2s ease;
	align-self: start;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		transform: translateY(-2px);
		box-shadow: ${(props) => props.theme.shadows.md};
	}
`;

export const RecipeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;

export const RecipeTitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex: 1;
`;

export const RecipeIcon = styled.span`
	font-size: 1.5rem;
`;

export const RecipeName = styled.h4`
	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 1rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ExpandButton = styled(motion.button)`
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 4px;
	color: ${(props) => props.theme.colors.textSecondary};
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 1.2rem;
`;

export const RecipeInfo = styled.div`
	margin-bottom: 1rem;
`;

export const RecipeStats = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.75rem;
		font-size: 0.85rem;
	}
`;

export const RecipeMacros = styled.div`
	display: flex;
	gap: 1rem;
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.85rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.75rem;
		font-size: 0.85rem;
	}
`;

export const RecipeDetails = styled.div`
	margin-top: 1rem;
	padding-top: 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.05);

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const RecipeIngredients = styled.div`
	margin-bottom: 1rem;
`;

export const RecipeIngredientsTitle = styled.h5`
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

export const RecipeIngredientsList = styled.ul`
	list-style: none;
	padding: 0;
	color: ${(props) => props.theme.colors.textSecondary};

	li {
		padding: 0.25rem 0;
		padding-left: 1.5rem;
		position: relative;

		&::before {
			content: '•';
			position: absolute;
			left: 0;
			color: ${(props) => props.theme.colors.primary};
		}

		@media (max-width: 768px) {
			font-size: 0.85rem;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}
	}
`;

export const RecipeInstructions = styled.div`
	margin-bottom: 1rem;
`;

export const RecipeInstructionsTitle = styled.h5`
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

export const RecipeInstructionsText = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	line-height: 1.6;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const RecipeHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;

export const MealPlanSuggestion = styled(CardDark)`
	margin-top: 2rem;
`;

export const MealPlanTitle = styled.h4`
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 1.1rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MealsPerDaySelector = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;

export const MealSelectorButton = styled(motion.button)`
	padding: 0.5rem 1rem;
	background: ${(props) => props.theme.colors.bgCard};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	color: ${(props) => props.theme.colors.textSecondary};
	cursor: pointer;
	transition: all 0.2s ease;

	&.active {
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
		color: white;
	}

	@media (max-width: 768px) {
		padding: 0.4rem 0.8rem;
		font-size: 0.85rem;
		flex: 1 1 auto;
		min-width: 60px;
	}
`;

export const MealPlanSummary = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0.75rem;
		min-width: 0;
	}
`;

export const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textSecondary};

	@media (max-width: 768px) {
		padding: 0.75rem;
		font-size: 0.9rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	strong {
		color: ${(props) => props.theme.colors.primary};
		font-size: 1.1rem;

		@media (max-width: 768px) {
			font-size: 1rem;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		&.warning {
			color: ${(props) => props.theme.colors.warning};
		}
	}
`;

export const MealPlanDetails = styled.div`
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const MealPlanDetailsTitle = styled.h5`
	font-size: 1.25rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;
`;

export const DailyMealsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const DailyMealItem = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const DailyMealHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;

export const MealTime = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.primary};

	@media (max-width: 768px) {
		font-size: 1rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MealTarget = styled.span`
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;
`;

export const DailyMealContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const DailyMealName = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	strong {
		color: ${(props) => props.theme.colors.textPrimary};
		font-size: 1.1rem;

		@media (max-width: 768px) {
			font-size: 1rem;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}
	}
`;

export const MealIcon = styled.span`
	font-size: 1.5rem;
`;

export const DailyMealInfo = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		gap: 0.75rem;
	}
`;

export const CalculatorCard = styled(Card)`
	margin-top: 2rem;
	text-align: left;
`;

export const CalculatorDescription = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 0.95rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const CalculatorForm = styled.form`
	margin-bottom: 2rem;
`;

export const FormSmall = styled.small`
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.85rem;
	margin-top: 0.25rem;
`;

export const CalculateButton = styled(Button)`
	width: 100%;
	margin-top: 1rem;
`;

export const CalculatorResults = styled.div`
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ResultsTitle = styled.h3`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;
`;

export const ResultsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}
`;

export const ResultItem = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	&.highlight {
		border-color: ${(props) => props.theme.colors.primary};
		background: linear-gradient(
			135deg,
			rgba(64, 224, 208, 0.1) 0%,
			rgba(64, 224, 208, 0.05) 100%
		);
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		min-width: 0;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const ResultLabel = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
	margin-bottom: 0.5rem;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ResultValue = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-size: 1.75rem;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MacrosGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0.75rem;
		min-width: 0;
	}
`;

export const MacroItem = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	&.protein {
		border-left: 4px solid ${(props) => props.theme.colors.primary};
	}

	&.carbs {
		border-left: 4px solid ${(props) => props.theme.colors.secondary};
	}

	&.fat {
		border-left: 4px solid ${(props) => props.theme.colors.accent};
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		min-width: 0;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const MacroIcon = styled.div`
	font-size: 2rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		flex-shrink: 0;
	}
`;

export const MacroContent = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		min-width: 0;
		overflow: hidden;
	}
`;

export const MacroName = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
	margin-bottom: 0.25rem;

	@media (max-width: 768px) {
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MacroValue = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1.5rem;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const MacroCalories = styled.div`
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.85rem;

	@media (max-width: 768px) {
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;
