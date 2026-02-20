import styled from 'styled-components';
import { workoutPrograms } from '../../../data/workoutPrograms';
import {
	ProgramArrow,
	ProgramBadge,
	ProgramCardHeader,
	ProgramCardLarge,
	ProgramCardTitle,
	ProgramDescription,
	ProgramStats,
} from './styles/styles';

const ProgramsGridContainer = ({ className }) => {
	return (
		<div className={className}>
			{Object.entries(workoutPrograms).map(([key, program]) => (
				<ProgramCardLarge key={key} to={`/programs/${key}`}>
					<ProgramCardHeader>
						<ProgramCardTitle>{program.name}</ProgramCardTitle>
						<ProgramBadge>{program.duration}</ProgramBadge>
					</ProgramCardHeader>
					<ProgramDescription>
						{program.description}
					</ProgramDescription>
					<ProgramStats>
						<span>{program.weeks.length} недель</span>
						<span>•</span>
						<span>От начального до продвинутого</span>
					</ProgramStats>
					<ProgramArrow>→</ProgramArrow>
				</ProgramCardLarge>
			))}
		</div>
	);
};

export const ProgramsGrid = styled(ProgramsGridContainer)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
