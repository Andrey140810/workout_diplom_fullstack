import { useState } from 'react';
import {
	calculateCalories,
	getActivityLevelDescription,
	getGoalDescription,
} from '../../../utils';
import {
	CalculateButton,
	CalculatorCard,
	CalculatorDescription,
	CalculatorForm,
	CalculatorResults,
	FormSmall,
	MacroCalories,
	MacroContent,
	MacroIcon,
	MacroItem,
	MacroName,
	MacrosGrid,
	MacroValue,
	ResultItem,
	ResultLabel,
	ResultsGrid,
	ResultValue,
} from './styles/nutrition-styles';
import {
	FormGroup,
	FormInput,
	FormLabel,
	FormRow,
	FormSelect,
	SectionTitle,
} from '../../components';

export const CalorieCalculator = ({ onCalculate, calculatorResult }) => {
	const [calcData, setCalcData] = useState({
		weight: '',
		height: '',
		age: '',
		gender: 'male',
		activityLevel: 'moderate',
		goal: 'maintain',
	});

	const handleCalculate = (e) => {
		e.preventDefault();

		const weight = parseFloat(calcData.weight);
		const height = parseFloat(calcData.height);
		const age = parseInt(calcData.age);

		if (
			!weight ||
			!height ||
			!age ||
			weight <= 0 ||
			height <= 0 ||
			age <= 0
		) {
			alert('Пожалуйста, заполните все поля корректно');
			return;
		}

		const result = calculateCalories(
			weight,
			height,
			age,
			calcData.gender,
			calcData.activityLevel,
			calcData.goal,
		);

		onCalculate(result);
	};

	return (
		<CalculatorCard>
			<SectionTitle>Калькулятор калорий</SectionTitle>
			<CalculatorDescription>
				Расчитайте вашу суточную норму калорий и микронутриентов
			</CalculatorDescription>
			<CalculatorForm onSubmit={handleCalculate}>
				<FormRow>
					<FormGroup>
						<FormLabel htmlFor="weight">Вес (кг)</FormLabel>
						<FormInput
							type="number"
							id="weight"
							value={calcData.weight}
							onChange={(e) =>
								setCalcData({
									...calcData,
									weight: e.target.value,
								})
							}
							required
							min="1"
							step="0.1"
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="height">Рост (см)</FormLabel>
						<FormInput
							type="number"
							id="height"
							value={calcData.height}
							onChange={(e) =>
								setCalcData({
									...calcData,
									height: e.target.value,
								})
							}
							required
							min="1"
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="age">Возраст</FormLabel>
						<FormInput
							type="number"
							id="age"
							value={calcData.age}
							onChange={(e) =>
								setCalcData({
									...calcData,
									age: e.target.value,
								})
							}
							required
							min="1"
						/>
					</FormGroup>
				</FormRow>
				<FormRow>
					<FormGroup>
						<FormLabel htmlFor="gender">Пол</FormLabel>
						<FormSelect
							id="gender"
							value={calcData.gender}
							onChange={(e) =>
								setCalcData({
									...calcData,
									gender: e.target.value,
								})
							}
						>
							<option value="male">Мужской</option>
							<option value="female">Женский</option>
						</FormSelect>
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="activityLevel">Пол</FormLabel>
						<FormSelect
							id="activityLevel"
							value={calcData.activityLevel}
							onChange={(e) =>
								setCalcData({
									...calcData,
									activityLevel: e.target.value,
								})
							}
						>
							<option value="sedentary">
								Сидячий образ жизни
							</option>
							<option value="light">
								Легкая активность (1-3 тренировки/нед)
							</option>
							<option value="moderate">
								Умеренная активность (3-5 тренировки/нед)
							</option>
							<option value="active">
								Высокая активность (6-7 тренировки/нед)
							</option>
							<option value="veryActive">
								Очень высокая активность
							</option>
						</FormSelect>
						<FormSmall>
							{getActivityLevelDescription(
								calcData.activityLevel,
							)}
						</FormSmall>
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="goal">Пол</FormLabel>
						<FormSelect
							id="goal"
							value={calcData.goal}
							onChange={(e) =>
								setCalcData({
									...calcData,
									goal: e.target.value,
								})
							}
						>
							<option value="loseWeight">Похудение</option>
							<option value="maintain">Поддержание массы</option>
							<option value="gainWeight">Набор массы</option>
						</FormSelect>
						<FormSmall>
							{getGoalDescription(calcData.goal)}
						</FormSmall>
					</FormGroup>
				</FormRow>
				<CalculateButton
					type="submit"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Рассчитать
				</CalculateButton>
			</CalculatorForm>
			{calculatorResult && (
				<CalculatorResults>
					<SectionTitle>Результаты расчета</SectionTitle>
					<ResultsGrid>
						<ResultItem>
							<ResultLabel>Базовый метаболизм</ResultLabel>
							<ResultValue>
								{calculatorResult.bmr} ккал
							</ResultValue>
						</ResultItem>
						<ResultItem>
							<ResultLabel>Общий расход</ResultLabel>
							<ResultValue>
								{calculatorResult.tdee} ккал
							</ResultValue>
						</ResultItem>
						<ResultItem className="highlight">
							<ResultLabel>Суточная норма калорий</ResultLabel>
							<ResultValue>
								{calculatorResult.dailyCalories} ккал
							</ResultValue>
						</ResultItem>
					</ResultsGrid>
					<section>
						<SectionTitle>Макронутриенты</SectionTitle>
						<MacrosGrid>
							<MacroItem className="protein">
								<MacroIcon>💪</MacroIcon>
								<MacroContent>
									<MacroName>Белки</MacroName>
									<MacroValue>
										{calculatorResult.macros.protein}г
									</MacroValue>
									<MacroCalories>
										{
											calculatorResult.macros
												.proteinCalories
										}
									</MacroCalories>
								</MacroContent>
							</MacroItem>
							<MacroItem className="fat">
								<MacroIcon>🥑</MacroIcon>
								<MacroContent>
									<MacroName>Жиры</MacroName>
									<MacroValue>
										{calculatorResult.macros.fat}г
									</MacroValue>
									<MacroCalories>
										{calculatorResult.macros.fatCalories}
									</MacroCalories>
								</MacroContent>
							</MacroItem>
							<MacroItem className="carbs">
								<MacroIcon>🌾</MacroIcon>
								<MacroContent>
									<MacroName>Углеводы</MacroName>
									<MacroValue>
										{calculatorResult.macros.carbs}г
									</MacroValue>
									<MacroCalories>
										{calculatorResult.macros.carbsCalories}
									</MacroCalories>
								</MacroContent>
							</MacroItem>
						</MacrosGrid>
					</section>
				</CalculatorResults>
			)}
		</CalculatorCard>
	);
};
