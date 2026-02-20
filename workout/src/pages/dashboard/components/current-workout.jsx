import {
	CurrentWorkoutCard,
	ExerciseListItem,
	ExercisesList,
	ExercisesPreview,
	ExercisesPreviewTitle,
	InfoLabel,
	InfoValue,
	RestDay,
	StartWorkoutButton,
	WorkoutBadge,
	WorkoutCardHeader,
	WorkoutCardTitle,
	WorkoutInfo,
	WorkoutInfoItem,
} from './styles/dashboard-styles';

export const CurrentWorkout = ({
	currentProgram,
	currentDay,
	weekNum,
	dayNum,
	programKey,
}) => {
	return (
		<CurrentWorkoutCard>
			<WorkoutCardHeader>
				<WorkoutCardTitle>Текущая тренировка</WorkoutCardTitle>
				<WorkoutBadge>{currentProgram.name}</WorkoutBadge>
			</WorkoutCardHeader>

			<WorkoutInfo>
				<WorkoutInfoItem>
					<InfoLabel>Неделя:</InfoLabel>
					<InfoValue>{weekNum}</InfoValue>
				</WorkoutInfoItem>
				<WorkoutInfoItem>
					<InfoLabel>День:</InfoLabel>
					<InfoValue>{dayNum}</InfoValue>
				</WorkoutInfoItem>
				<WorkoutInfoItem>
					<InfoLabel>Тип:</InfoLabel>
					<InfoValue>{currentDay.name}</InfoValue>
				</WorkoutInfoItem>
			</WorkoutInfo>

			{currentDay.exercises && currentDay.exercises.length > 0 ? (
				<>
					<ExercisesPreview>
						<ExercisesPreviewTitle>
							Упражнения:
						</ExercisesPreviewTitle>
						<ExercisesList>
							{currentDay.exercises
								.slice(0, 3)
								.map((exercise, idx) => (
									<ExerciseListItem key={idx}>
										{exercise.name}
									</ExerciseListItem>
								))}
							{currentDay.exercises.length > 3 && (
								<ExerciseListItem>
									+{currentDay.exercises.length - 3} еще
								</ExerciseListItem>
							)}
						</ExercisesList>
					</ExercisesPreview>

					<StartWorkoutButton
						to={`/workout/${programKey}/${weekNum}/${dayNum}`}
					>
						Начать тренировку
					</StartWorkoutButton>
				</>
			) : (
				<RestDay>
					<p>Сегодня день отдыха! Отдохните и восстановитесь 💆‍♂️</p>
				</RestDay>
			)}
		</CurrentWorkoutCard>
	);
};
