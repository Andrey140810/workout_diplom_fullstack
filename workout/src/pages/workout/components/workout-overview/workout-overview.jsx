import {
	Checkmark,
	ExerciseItem,
	ExercisesList,
	ExercisesOverview,
	ExercisesOverviewTitle,
} from '../styles/workout-styles';

export const WorkoutOverview = ({
	workoutData,
	currentExerciseIndex,
	setCurrentExerciseIndex,
	exerciseResults,
}) => {
	return (
		<ExercisesOverview>
			<ExercisesOverviewTitle>Все упражнения:</ExercisesOverviewTitle>
			<ExercisesList>
				{workoutData.exercises.map((exercise, idx) => (
					<ExerciseItem
						key={idx}
						onClick={() => setCurrentExerciseIndex(idx)}
						className={idx === currentExerciseIndex ? 'active' : ''}
					>
						<span>
							{idx + 1}. {exercise.name}
						</span>
						{exerciseResults[idx] &&
							Object.values(exerciseResults[idx]).every(
								(set) => set?.reps,
							) && <Checkmark>✓</Checkmark>}
					</ExerciseItem>
				))}
			</ExercisesList>
		</ExercisesOverview>
	);
};
