import styled from 'styled-components';

export const StatisticsPage = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	text-align: left;

	@media (max-width: 768px) {
		padding: 1rem;
		overflow-x: hidden;
		width: 100%;
		box-sizing: border-box;
	}
`;

export const StatisticsHeader = styled.div`
	margin-bottom: 2rem;
`;

export const StatisticsTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	background: ${(props) => props.theme.gradients.primary};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media (max-width: 768px) {
		font-size: 1.75rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const Subtitle = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.1rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const MainStats = styled.div`
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

export const StatBox = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.2s ease;
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	&:hover {
		transform: translateY(-4px);
		box-shadow: ${(props) => props.theme.shadows.lg};
	}

	&.primary {
		border-color: ${(props) => props.theme.colors.primary};
		background: linear-gradient(
			135deg,
			rgba(64, 224, 208, 0.1) 0%,
			rgba(64, 224, 208, 0.05) 100%
		);
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		min-width: 0;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const StatBoxIcon = styled.div`
	font-size: 3rem;

	@media (max-width: 768px) {
		font-size: 2rem;
		flex-shrink: 0;
	}
`;

export const StatBoxContent = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		min-width: 0;
		overflow: hidden;
	}
`;

export const StatBoxValue = styled.div`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
	line-height: 1;

	@media (max-width: 768px) {
		font-size: 1.75rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const StatBoxLabel = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
	margin-top: 0.5rem;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const Section = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	margin-bottom: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;

	@media (max-width: 768px) {
		padding: 1.5rem;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const AchievementsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}
`;

export const AchievementCard = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease;
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	&:hover {
		transform: translateY(-2px);
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: ${(props) => props.theme.shadows.md};
	}

	@media (max-width: 768px) {
		padding: 1rem;
		min-width: 0;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const AchievementIcon = styled.div`
	font-size: 3rem;
	margin-bottom: 0.5rem;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const AchievementName = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 600;
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.8rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ProgressChart = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 0.5rem;
	height: 200px;
	padding: 1rem 0;
	overflow-x: auto;
	min-width: 0;

	@media (max-width: 768px) {
		height: 150px;
		overflow-x: auto;
		padding: 0.5rem 0;
	}
`;

export const ProgressBarWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 768px) {
		min-width: 40px;
		flex-shrink: 0;
	}
`;

export const ProgressBarLabel = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.85rem;
	text-transform: capitalize;

	@media (max-width: 768px) {
		font-size: 0.75rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const ProgressBar = styled.div`
	flex: 1;
	width: 100%;
	max-width: 50px;
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 8px 8px 0 0;
	display: flex;
	align-items: flex-end;
	overflow: hidden;

	@media (max-width: 768px) {
		max-width: 40px;
	}
`;

export const ProgressBarFill = styled.div`
	width: 100%;
	background: ${(props) => props.theme.gradients.primary};
	border-radius: 8px 8px 0 0;
	transition: height 0.3s ease;
	min-height: 4px;
`;

export const ProgressBarValue = styled.div`
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 600;
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const WorkoutsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const WorkoutHistoryItem = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease;
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;

	&:hover {
		border-color: rgba(64, 224, 208, 0.3);
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		padding: 1.25rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const WorkoutHistoryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1rem;
	flex-wrap: wrap;
	gap: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
`;

export const WorkoutHistoryTitle = styled.h3`
	font-size: 1.25rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 0.25rem;

	@media (max-width: 768px) {
		font-size: 1.1rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const WorkoutHistoryDate = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const WorkoutHistoryMeta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.25rem;
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		align-items: flex-start;
		font-size: 0.85rem;
	}
`;

export const WorkoutHistoryExercises = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.85rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const EmptyState = styled.div`
	text-align: center;
	padding: 3rem;
	color: ${(props) => props.theme.colors.textSecondary};
`;

export const Loading = styled.div`
	text-align: center;
	padding: 4rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.2rem;
`;
