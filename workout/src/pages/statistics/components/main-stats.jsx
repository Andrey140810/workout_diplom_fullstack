import styled from 'styled-components';
import {
	StatBox,
	StatBoxContent,
	StatBoxIcon,
	StatBoxLabel,
	StatBoxValue,
} from './styles/statistics-styles';

const MainStatsConteiner = ({ className, stats }) => {
	return (
		<div className={className}>
			<StatBox>
				<StatBoxIcon>🔥</StatBoxIcon>
				<StatBoxContent>
					<StatBoxValue>{stats.streak}</StatBoxValue>
					<StatBoxLabel>Дней подряд</StatBoxLabel>
				</StatBoxContent>
			</StatBox>
			<StatBox>
				<StatBoxIcon>💪</StatBoxIcon>
				<StatBoxContent>
					<StatBoxValue>{stats.totalWorkouts}</StatBoxValue>
					<StatBoxLabel>Всего тренировок</StatBoxLabel>
				</StatBoxContent>
			</StatBox>
			<StatBox>
				<StatBoxIcon>⏱️</StatBoxIcon>
				<StatBoxContent>
					<StatBoxValue>{stats.totalRepeads}</StatBoxValue>
					<StatBoxLabel>Всего повторений</StatBoxLabel>
				</StatBoxContent>
			</StatBox>
			<StatBox>
				<StatBoxIcon>🎯</StatBoxIcon>
				<StatBoxContent>
					<StatBoxValue>{stats.totalExercises}</StatBoxValue>
					<StatBoxLabel>Упраженений выполнено</StatBoxLabel>
				</StatBoxContent>
			</StatBox>
		</div>
	);
};

export const MainStats = styled(MainStatsConteiner)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}
`;
