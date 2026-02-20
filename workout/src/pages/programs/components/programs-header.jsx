import styled from 'styled-components';
import { PageSubtitle, PageTitle } from '../../components';

const ProgramsHeaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<PageTitle>Программы тренировок</PageTitle>
			<PageSubtitle>
				Выберите программу по своему уровню подготовки
			</PageSubtitle>
		</div>
	);
};

export const ProgramsHeader = styled(ProgramsHeaderContainer)`
	margin-bottom: 3rem;
`;
