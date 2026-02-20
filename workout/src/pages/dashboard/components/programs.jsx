import { workoutPrograms } from '../../../data/workoutPrograms';
import {
	ProgramCard,
	ProgramCardDescription,
	ProgramCardTitle,
	ProgramMeta,
	ProgramsGrid,
	ProgramsSection,
	ProgramsSectionTitle,
} from './styles/dashboard-styles';

export const ProgramsSectionContainer = () => {
	return (
		<ProgramsSection>
			<ProgramsSectionTitle>Программы тренировок</ProgramsSectionTitle>
			<ProgramsGrid>
				{Object.entries(workoutPrograms).map(([key, program]) => (
					<ProgramCard key={key} to={`/programs/${key}`}>
						<ProgramCardTitle>{program.name}</ProgramCardTitle>
						<ProgramCardDescription>
							{program.description}
						</ProgramCardDescription>
						<ProgramMeta>
							<span>⏱️ {program.duration}</span>
						</ProgramMeta>
					</ProgramCard>
				))}
			</ProgramsGrid>
		</ProgramsSection>
	);
};
