import { useNavigate } from 'react-router-dom';
import { getWorkoutProgram } from '../../../utils';
import {
	BackButton,
	DayCard,
	DayExerciseItem,
	DayExercises,
	DayHeader,
	DayName,
	DaysGrid,
	DayTitle,
	ExerciseName,
	ExerciseReps,
	ProgramDetailHeader,
	ProgramDetailSubtitle,
	ProgramDetailTitle,
	ProgramMeta,
	ProgramsPage,
	RestDayBadge,
	StartWorkoutDayButton,
	WeekCard,
	WeeksContainer,
	WeekTitle,
} from './styles/styles';
import styled from 'styled-components';

const ProgramDetailContainer = ({ className, level }) => {
	const program = getWorkoutProgram(level);
	const navigate = useNavigate();

	if (!program) {
		return <ProgramsPage>Программа не найдена</ProgramsPage>;
	}

	const handleStartWorkout = (week, day) => {
		navigate(`/workout/${level}/${week}/${day}`);
	};

	return (
		<div className={className}>
			<BackButton to="/programs">← Назад к программам</BackButton>

			<ProgramDetailHeader>
				<ProgramDetailTitle>{program.name}</ProgramDetailTitle>
				<ProgramDetailSubtitle>
					{program.description}
				</ProgramDetailSubtitle>
				<ProgramMeta>
					<span>⏱️ {program.duration}</span>
					<span>📅 {program.weeks.length} недель</span>
				</ProgramMeta>
			</ProgramDetailHeader>

			<WeeksContainer>
				{program.weeks.map((week) => (
					<WeekCard key={week.week}>
						<WeekTitle>Неделя {week.week}</WeekTitle>
						<DaysGrid>
							{week.days.map((day) => (
								<DayCard key={day.day}>
									<DayHeader>
										<DayTitle>День {day.day}</DayTitle>
										<DayName>{day.name}</DayName>
									</DayHeader>
									{day.exercises.length > 0 ? (
										<>
											<DayExercises>
												{day.exercises.map(
													(exercise, idx) => (
														<DayExerciseItem
															key={idx}
														>
															<ExerciseName>
																{exercise.name}
															</ExerciseName>
															<ExerciseReps>
																{exercise.sets}{' '}
																×{' '}
																{exercise.reps}
															</ExerciseReps>
														</DayExerciseItem>
													),
												)}
											</DayExercises>
											<StartWorkoutDayButton
												onClick={() =>
													handleStartWorkout(
														week.week,
														day.day,
													)
												}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												Начать тренировку
											</StartWorkoutDayButton>
										</>
									) : (
										<RestDayBadge>Отдых</RestDayBadge>
									)}
								</DayCard>
							))}
						</DaysGrid>
					</WeekCard>
				))}
			</WeeksContainer>
		</div>
	);
};

export const ProgramDetail = styled(ProgramDetailContainer)`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	text-align: left;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
