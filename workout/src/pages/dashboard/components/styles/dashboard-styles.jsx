import styled from 'styled-components';
import { PageTitle } from '../../../components';
import { Link } from 'react-router-dom';

export const DashboardTitle = styled(PageTitle)`
	color: #fff;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	background: none;
	-webkit-background-clip: unset;
	-webkit-text-fill-color: unset;
	background-clip: unset;
`;

export const CurrentWorkoutCard = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	margin-bottom: 3rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: ${(props) => props.theme.shadows.lg};
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;

	@media (max-width: 768px) {
		padding: 1.5rem;
		margin-bottom: 2rem;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const WorkoutCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
`;

export const WorkoutCardTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	color: #fff;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		font-size: 1.25rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const WorkoutBadge = styled.span`
	background: ${(props) => props.theme.gradients.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.85rem;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 0.75rem;
		padding: 0.4rem 0.8rem;
		white-space: nowrap;
	}
`;

export const WorkoutInfo = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		gap: 1rem;
		flex-wrap: wrap;
	}
`;

export const WorkoutInfoItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	@media (max-width: 768px) {
		min-width: 0;
		flex: 1 1 auto;
	}
`;

export const InfoLabel = styled.span`
	color: rgba(255, 255, 255, 0.8);
	font-size: 0.9rem;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const InfoValue = styled.span`
	color: #fff;
	font-size: 1.1rem;
	font-weight: 600;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		word-wrap: break-word;
		overflow-wrap: break-word;
		font-size: 1rem;
	}
`;

export const ExercisesPreview = styled.div`
	margin-bottom: 1.5rem;
	text-align: left;
`;

export const ExercisesPreviewTitle = styled.h3`
	font-size: 1.1rem;
	color: #fff;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
	margin-bottom: 0.75rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const ExercisesList = styled.ul`
	list-style: none;
	padding: 0;
`;

export const ExerciseListItem = styled.li`
	color: rgba(255, 255, 255, 0.9);
	padding: 0.5rem 0;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

	&:last-child {
		border-bottom: none;
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const StartWorkoutButton = styled(Link)`
	display: inline-block;
	width: 100%;
	padding: 1rem;
	background: ${(props) => props.theme.gradients.primary};
	color: white;
	text-align: center;
	border-radius: 8px;
	font-size: 1.1rem;
	font-weight: 600;
	transition: all 0.2s ease;
	text-decoration: none;

	&:hover {
		color: black;
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}
`;

export const RestDay = styled.div`
	text-align: center;
	padding: 2rem;
	color: rgba(255, 255, 255, 0.9);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ProgramsSection = styled.div`
	margin-top: 3rem;
`;

export const ProgramsSectionTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.colors.textPrimary};

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const ProgramsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const ProgramCard = styled(Link)`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(0, 0, 0, 0.7) 100%
		);
		z-index: 1;
	}

	> * {
		position: relative;
		z-index: 2;
	}

	&:hover {
		transform: translateY(-4px);
		box-shadow: ${(props) => props.theme.shadows.lg};
		border-color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const ProgramCardTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 700;
	color: #fff;
	margin-bottom: 0.5rem;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		font-size: 1.1rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ProgramCardDescription = styled.p`
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 1rem;
	font-size: 0.95rem;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		font-size: 0.9rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ProgramMeta = styled.div`
	color: rgba(255, 255, 255, 0.8);
	font-size: 0.9rem;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}
`;
export const StatCard = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 12px;
	padding: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.2s ease;
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${(props) => props.theme.shadows.lg};
		border-color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		padding: 1rem;
		min-width: 0;
		overflow: hidden;
	}
`;

export const StatIcon = styled.div`
	font-size: 2.5rem;

	@media (max-width: 768px) {
		font-size: 2rem;
		flex-shrink: 0;
	}
`;

export const StatContent = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		min-width: 0;
		overflow: hidden;
	}
`;

export const StatValue = styled.div`
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
	line-height: 1;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const StatLabel = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
	margin-top: 0.25rem;

	@media (max-width: 768px) {
		font-size: 0.8rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const Loading = styled.div`
	text-align: center;
	padding: 4rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.2rem;
`;
