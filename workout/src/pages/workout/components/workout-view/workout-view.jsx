import {
	BackButton,
	LoadingMessage,
	PrimaryButton,
	RestDayMessage,
	RestDayText,
	RestDayTitle,
	WorkoutHeader,
	WorkoutHeaderContent,
	WorkoutPage,
	WorkoutProgress,
	WorkoutTitle,
} from '../styles/workout-styles';
import { WorkoutExercise } from '../workout-exercise/workout-exercise';
import { WorkoutOverview } from '../workout-overview/workout-overview';

export const WorkoutView = ({
	loading,
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
	onBack,
	onGoToDashboard,
}) => {
	if (loading) return <LoadingMessage>Загрузка тренировки...</LoadingMessage>;
	if (
		!workoutData ||
		!workoutData.exercises ||
		workoutData.exercises.length === 0
	) {
		return (
			<WorkoutPage>
				<RestDayMessage>
					<RestDayTitle>День отдыха</RestDayTitle>
					<RestDayText>
						Сегодня нет тренировки. Отдохните и восстановитесь! 💆‍♂️
					</RestDayText>
					<PrimaryButton
						onClick={onGoToDashboard}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Вернуться на главную
					</PrimaryButton>
				</RestDayMessage>
			</WorkoutPage>
		);
	}

	const allExercisesCompleted =
		workoutData?.exercises?.every((_, idx) => {
			const result = exerciseResults[idx];
			if (!result) return false;
			return Object.values(result).every(
				(set) => set?.reps !== undefined && set?.reps !== null,
			);
		}) || false;

	return (
		<WorkoutPage>
			<WorkoutHeader>
				<BackButton onClick={onBack}>← Назад</BackButton>
				<WorkoutHeaderContent>
					<div>
						<WorkoutTitle>{workoutData.name}</WorkoutTitle>
						<WorkoutProgress>
							Упражнение {currentExerciseIndex + 1} из{' '}
							{workoutData.exercises.length}
						</WorkoutProgress>
					</div>
				</WorkoutHeaderContent>
			</WorkoutHeader>
			<WorkoutExercise
				workoutData={workoutData}
				currentExerciseIndex={currentExerciseIndex}
				setCurrentExerciseIndex={setCurrentExerciseIndex}
				exerciseResults={exerciseResults}
				onSetResult={onSetResult}
				restTime={restTime}
				isRestTimerRunning={isRestTimerRunning}
				onStartRestTimer={onStartRestTimer}
				onPauseRestTimer={onPauseRestTimer}
				onResetRestTimer={onResetRestTimer}
				onCompleteWorkout={onCompleteWorkout}
				allExercisesCompleted={allExercisesCompleted}
			/>
			<WorkoutOverview
				workoutData={workoutData}
				currentExerciseIndex={currentExerciseIndex}
				setCurrentExerciseIndex={setCurrentExerciseIndex}
				exerciseResults={exerciseResults}
			/>
		</WorkoutPage>
	);
};
