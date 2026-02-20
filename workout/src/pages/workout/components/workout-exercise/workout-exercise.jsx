import { RestTimerComponent } from '../rest-timer/rest-timer';
import {
	CompleteButton,
	ExerciseCard,
	ExerciseDescription,
	ExerciseHeader,
	ExerciseInfo,
	ExerciseNavigation,
	ExerciseNumber,
	ExerciseTarget,
	ExerciseTitle,
	NavButton,
	NavButtonPrimary,
	RepsInput,
	SetNumber,
	SetRow,
	SetsContainer,
	SetsTitle,
	SetTarget,
} from '../styles/workout-styles';

export const WorkoutExercise = ({
	workoutData,
	currentExerciseIndex,
	setCurrentExerciseIndex,
	exerciseResults,
	onSetResult,
	restTime,
	isRestTimerRunning,
	onStartRestTimer,
	onPauseRestTimer,
	onResetRestTimer,
	onCompleteWorkout,
	allExercisesCompleted,
}) => {
	const currentExercise = workoutData?.exercises?.[currentExerciseIndex];
	const exerciseResult = exerciseResults?.[currentExerciseIndex];

	return (
		<ExerciseCard>
			<ExerciseHeader>
				<ExerciseTitle>{currentExercise.name}</ExerciseTitle>
				<ExerciseNumber>
					{currentExerciseIndex + 1}/{workoutData.exercises.length}
				</ExerciseNumber>
			</ExerciseHeader>

			<ExerciseInfo>
				<ExerciseDescription>
					{currentExercise.description}
				</ExerciseDescription>
				<ExerciseTarget>
					<span>
						Цель: {currentExercise.sets} подхода по{' '}
						{currentExercise.reps} повторений
					</span>
					<span>Рекомендуемый отдых: {currentExercise.rest}</span>
				</ExerciseTarget>
			</ExerciseInfo>

			<RestTimerComponent
				restTime={restTime}
				isRestTimerRunning={isRestTimerRunning}
				onStart={onStartRestTimer}
				onPause={onPauseRestTimer}
				onReset={onResetRestTimer}
			/>
			<SetsContainer>
				<SetsTitle>Подходы:</SetsTitle>
				{Array(currentExercise.sets || 1)
					.fill(null)
					.map((_, setIndex) => {
						const setResult = exerciseResult?.[setIndex] || {};
						return (
							<SetRow key={setIndex}>
								<SetNumber>Подход {setIndex + 1}</SetNumber>
								<RepsInput
									type="number"
									min="0"
									placeholder="Повторения"
									value={setResult.reps || ''}
									onChange={(e) =>
										onSetResult(
											currentExerciseIndex,
											setIndex,
											parseInt(e.target.value, 10) || 0,
										)
									}
								/>
								<SetTarget>
									Цель: {currentExercise.reps}
								</SetTarget>
							</SetRow>
						);
					})}
			</SetsContainer>

			<ExerciseNavigation>
				{currentExerciseIndex > 0 && (
					<NavButton
						onClick={() =>
							setCurrentExerciseIndex((prev) => prev - 1)
						}
					>
						← Предыдущее
					</NavButton>
				)}

				{currentExerciseIndex < workoutData.exercises.length - 1 ? (
					<NavButtonPrimary
						onClick={() =>
							setCurrentExerciseIndex((prev) => prev + 1)
						}
					>
						Следующее →
					</NavButtonPrimary>
				) : (
					<CompleteButton
						onClick={onCompleteWorkout}
						disabled={!allExercisesCompleted}
					>
						{allExercisesCompleted
							? 'Завершить тренировку ✓'
							: 'Заполните все подходы'}
					</CompleteButton>
				)}
			</ExerciseNavigation>
		</ExerciseCard>
	);
};
