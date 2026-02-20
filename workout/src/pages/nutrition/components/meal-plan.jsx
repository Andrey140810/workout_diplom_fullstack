import { mealNames } from '../../../constants';
import { generateMealPlan } from '../../../utils';
import {
	DailyMealContent,
	DailyMealHeader,
	DailyMealInfo,
	DailyMealItem,
	DailyMealName,
	DailyMealsList,
	MealIcon,
	MealPlanDetails,
	MealPlanDetailsTitle,
	MealPlanSuggestion,
	MealPlanSummary,
	MealPlanTitle,
	MealsPerDaySelector,
	MealsSelectorButton,
	MealTarget,
	MealTime,
	SummaryItem,
} from './styles/nutrition-styles';

export const MealPlan = ({
	setSelectedMealPlan,
	selectedMealPlan,
	mealsPerDay,
	setMealsPerDay,
	calculatorResult,
}) => {
	if (!selectedMealPlan) return null;

	const handleMealsPerDayChange = (newValue) => {
		setMealsPerDay(newValue);
		if (calculatorResult) {
			const newPlan = generateMealPlan(
				calculatorResult.dailyCalories,
				newValue,
			);
			setSelectedMealPlan(newPlan);
		}
	};

	return (
		<MealPlanSuggestion>
			<MealPlanTitle>
				Примерный план питания ({selectedMealPlan.meals.length}{' '}
				{selectedMealPlan.meals.length === 1
					? 'прием'
					: selectedMealPlan.meals.length < 5
					? 'приема'
					: 'приемов'}{' '}
				пищи)
			</MealPlanTitle>
			<MealsPerDaySelector>
				<MealsSelectorButton
					className={mealsPerDay === 3 ? 'active' : ''}
					onClick={() => handleMealsPerDayChange(3)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					3 раза
				</MealsSelectorButton>
				<MealsSelectorButton
					className={mealsPerDay === 4 ? 'active' : ''}
					onClick={() => handleMealsPerDayChange(4)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					4 раза
				</MealsSelectorButton>
				<MealsSelectorButton
					className={mealsPerDay === 5 ? 'active' : ''}
					onClick={() => handleMealsPerDayChange(5)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					5 раз
				</MealsSelectorButton>
			</MealsPerDaySelector>
			<MealPlanSummary>
				<SummaryItem>
					<span>Цель:</span>
					<strong>{selectedMealPlan.targetCalories} ккал</strong>
				</SummaryItem>
				<SummaryItem>
					<span>Всего:</span>
					<strong
						className={
							selectedMealPlan.difference > 50 ? 'warning' : ''
						}
					>
						{selectedMealPlan.totalCalories} ккал
					</strong>
				</SummaryItem>
				<SummaryItem>
					<span>Белки:</span>
					<strong>{selectedMealPlan.totalProtein}г</strong>
				</SummaryItem>
				<SummaryItem>
					<span>Углеводы:</span>
					<strong>{selectedMealPlan.totalCarbs}г</strong>
				</SummaryItem>
				<SummaryItem>
					<span>Жиры:</span>
					<strong>{selectedMealPlan.totalFat}г</strong>
				</SummaryItem>
			</MealPlanSummary>
			<MealPlanDetails>
				<MealPlanDetailsTitle>Ваш дневной рацион:</MealPlanDetailsTitle>
				<DailyMealsList>
					{selectedMealPlan.meals.map((meal, idx) => (
						<DailyMealItem key={idx}>
							<DailyMealHeader>
								<MealTime>{mealNames[meal.mealType]}</MealTime>
								<MealTarget>
									Цель: ~{meal.targetCalories} ккал
								</MealTarget>
							</DailyMealHeader>
							<DailyMealContent>
								<DailyMealName>
									<MealIcon>{meal.image}</MealIcon>
									<strong>{meal.name}</strong>
								</DailyMealName>
								<DailyMealInfo>
									<span>🔥 {meal.calories} ккал</span>
									<span>Б: {meal.protein}г</span>
									<span>У: {meal.carbs}г</span>
									<span>Ж: {meal.fat}г</span>
								</DailyMealInfo>
							</DailyMealContent>
						</DailyMealItem>
					))}
				</DailyMealsList>
			</MealPlanDetails>
		</MealPlanSuggestion>
	);
};
