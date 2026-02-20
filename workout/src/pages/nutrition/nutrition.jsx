import { useState } from 'react';
import {
	PageContainer,
	PageHeader,
	PageSubtitle,
	PageTitle,
	TabButton,
	TabsContainer,
} from '../components';
import { CalorieCalculator } from './components/calorie-calculator';
import { RecipesView } from './components/recipes-view';
import { MealPlan } from './components/meal-plan';
import { generateMealPlan } from '../../utils';

export const Nutrition = () => {
	const [showCalculator, setShowCalculator] = useState(false);
	const [calculatorResult, setCalculatorResult] = useState(null);
	const [selectedMealPlan, setSelectedMealPlan] = useState(null);
	const [selectedMealType, setSelectedMealType] = useState(null);
	const [mealsPerDay, setMealsPerDay] = useState(3);

	const handleCalculate = (result) => {
		setCalculatorResult(result);
		const plan = generateMealPlan(result.dailyCalories, mealsPerDay);
		setSelectedMealPlan(plan);
	};

	return (
		<PageContainer>
			<PageHeader>
				<PageTitle>Правильное питание</PageTitle>
				<PageSubtitle>
					Калькулятор калорий и рецепты для спортсменов
				</PageSubtitle>
			</PageHeader>
			<TabsContainer>
				<TabButton
					className={!showCalculator ? 'active' : ''}
					onClick={() => setShowCalculator(false)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Рецепты
				</TabButton>
				<TabButton
					className={showCalculator ? 'active' : ''}
					onClick={() => setShowCalculator(true)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Калькулятор калорий
				</TabButton>
			</TabsContainer>
			{showCalculator ? (
				<>
					<CalorieCalculator
						onCalculate={handleCalculate}
						calculatorResult={calculatorResult}
					/>
					{calculatorResult && selectedMealPlan && (
						<MealPlan
							selectedMealPlan={selectedMealPlan}
							mealsPerDay={mealsPerDay}
							setMealsPerDay={setMealsPerDay}
							calculatorResult={calculatorResult}
							setSelectedMealPlan={setSelectedMealPlan}
						/>
					)}
				</>
			) : (
				<RecipesView
					mealsPerDay={mealsPerDay}
					setMealsPerDay={setMealsPerDay}
					selectedMealType={selectedMealType}
					setSelectedMealType={setSelectedMealType}
				/>
			)}
		</PageContainer>
	);
};
