import { formatWorkoutDate, formatWorkoutRepeads } from '../../../utils';
import { SectionTitle } from '../../components';
import { MainStats } from './main-stats';
import {
	AchievementCard,
	AchievementIcon,
	AchievementName,
	AchievementsGrid,
	EmptyState,
	ProgressBar,
	ProgressBarFill,
	ProgressBarLabel,
	ProgressBarValue,
	ProgressBarWrapper,
	ProgressChart,
	Section,
	StatisticsHeader,
	StatisticsPage,
	StatisticsTitle,
	Subtitle,
	WorkoutHistoryDate,
	WorkoutHistoryExercises,
	WorkoutHistoryHeader,
	WorkoutHistoryItem,
	WorkoutHistoryMeta,
	WorkoutHistoryTitle,
	WorkoutsList,
} from './styles/statistics-styles';

export const StatisticsView = ({ stats, workoutsList }) => {
	return (
		<StatisticsPage>
			<StatisticsHeader>
				<StatisticsTitle>Статистика и достижения</StatisticsTitle>
				<Subtitle>Отслеживайте свои достижения</Subtitle>
			</StatisticsHeader>
			{stats && (
				<>
					<MainStats stats={stats} />
					{Array.isArray(stats.achievements) &&
						stats.achievements.length > 0 && (
							<Section>
								<SectionTitle>Достижения</SectionTitle>
								<AchievementsGrid>
									{stats.achievements.map(
										(achievement, idx) => (
											<AchievementCard
												key={
													achievement.name ||
													`achievement-${idx}`
												}
											>
												<AchievementIcon>
													{achievement.icon}
												</AchievementIcon>
												<AchievementName>
													{achievement.name}
												</AchievementName>
											</AchievementCard>
										),
									)}
								</AchievementsGrid>
							</Section>
						)}
					{Array.isArray(stats.weeklyProgress) &&
						stats.weeklyProgress.length > 0 && (
							<Section>
								<SectionTitle>Прогресс за неделю</SectionTitle>
								<ProgressChart>
									{stats.weeklyProgress.map((day, idx) => {
										const dayNames = [
											'Пн',
											'Вт',
											'Ср',
											'Чт',
											'Пт',
											'Сб',
											'Вс',
										];
										const dayName = dayNames[idx];
										return (
											<ProgressBarWrapper
												key={
													day.date ||
													`progress-${idx}`
												}
											>
												<ProgressBarLabel>
													{dayName}
												</ProgressBarLabel>
												<ProgressBar>
													<ProgressBarFill
														style={{
															height: `${Math.min(
																(day.workouts /
																	3) *
																	100,
																100,
															)}%`,
														}}
													/>
												</ProgressBar>
												<ProgressBarValue>
													{day.workouts}
												</ProgressBarValue>
											</ProgressBarWrapper>
										);
									})}
								</ProgressChart>
							</Section>
						)}
					<Section>
						<SectionTitle>История тренировок</SectionTitle>
						{workoutsList.length === 0 ? (
							<EmptyState>
								<p>У вас пока что нет завершенных тренировок</p>
							</EmptyState>
						) : (
							<WorkoutsList>
								{workoutsList.map((workout, idx) => (
									<WorkoutHistoryItem
										key={
											workout.name ||
											`workout-${idx}-${workout.completedAt}` ||
											workout.createdAt
										}
									>
										<WorkoutHistoryHeader>
											<div>
												<WorkoutHistoryTitle>
													{workout.program?.level ===
														'beginner' &&
														'Начальный уровень'}
													{workout.program?.level ===
														'intermediate' &&
														'Средний уровень'}
													{workout.program?.level ===
														'advanced' &&
														'Продвинутый уровень'}
												</WorkoutHistoryTitle>
												<WorkoutHistoryDate>
													{formatWorkoutDate(
														workout.completedAt ||
															workout.createdAt,
													)}
												</WorkoutHistoryDate>
											</div>
											<WorkoutHistoryMeta>
												<span>
													Неделя{' '}
													{workout.program?.week ||
														'?'}
													, День{' '}
													{workout.program?.day ||
														'?'}
												</span>
												<span>
													{formatWorkoutRepeads(
														workout,
													)}{' '}
													повторений
												</span>
											</WorkoutHistoryMeta>
										</WorkoutHistoryHeader>
										<WorkoutHistoryExercises>
											Упражнений{' '}
											{workout.exercises?.length || '?'}
										</WorkoutHistoryExercises>
									</WorkoutHistoryItem>
								))}
							</WorkoutsList>
						)}
					</Section>
				</>
			)}
		</StatisticsPage>
	);
};
