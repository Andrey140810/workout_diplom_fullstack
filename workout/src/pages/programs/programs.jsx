import { useParams } from 'react-router-dom';
import { PageContainer } from '../components';
import { ProgramsGrid, ProgramsHeader } from './components';
import { ProgramDetail } from './components/program-detail';
import { workoutPrograms } from '../../data/workoutPrograms';

export const Programs = () => {
	const { level } = useParams();

	if (level && workoutPrograms[level]) {
		return <ProgramDetail level={level} />;
	}
	return (
		<PageContainer>
			<ProgramsHeader />
			<ProgramsGrid />
		</PageContainer>
	);
};
