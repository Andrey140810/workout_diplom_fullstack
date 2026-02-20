import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ExerciseCard = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	margin-bottom: 2rem;
	text-align: left;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: ${(props) => props.theme.shadows.lg};
`;

export const ExerciseHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}
`;

export const ExerciseTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
`;

export const ExerciseNumber = styled.span`
	background: ${(props) => props.theme.gradients.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.9rem;
	font-weight: 600;
`;

export const ExerciseInfo = styled.div`
	margin-bottom: 2rem;
`;

export const ExerciseDescription = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	margin-bottom: 1rem;
	font-size: 1rem;
	line-height: 1.6;
`;

export const ExerciseTarget = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const SetsContainer = styled.div`
	margin-bottom: 2rem;
`;

export const SetsTitle = styled.h3`
	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1rem;
`;

export const SetRow = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 8px;
	margin-bottom: 0.75rem;
	border: 1px solid rgba(255, 255, 255, 0.05);

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
`;

export const SetNumber = styled.span`
	font-weight: 600;
	color: ${(props) => props.theme.colors.textPrimary};
	min-width: 100px;
`;

export const RepsInput = styled.input`
	flex: 1;
	padding: 0.75rem;
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	text-align: center;
	max-width: 150px;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.1);
	}

	@media (max-width: 768px) {
		width: 100%;
		max-width: 100%;
	}
`;

export const SetTarget = styled.span`
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;
`;

export const ExerciseNavigation = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
`;

export const NavButton = styled(motion.button)`
	flex: 1;
	padding: 1rem;
	background: ${(props) => props.theme.colors.bgDark};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		background: rgba(64, 224, 208, 0.1);
	}
`;

export const NavButtonPrimary = styled(NavButton)`
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	color: white;

	&:hover {
		background: ${(props) => props.theme.colors.primaryDark};
		color: black;
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}
`;

export const CompleteButton = styled(motion.button)`
	flex: 1;
	padding: 1rem;
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover:not(:disabled) {
		color: black;
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const ExercisesOverview = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ExercisesOverviewTitle = styled.h3`
	font-size: 1.25rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1rem;
`;

export const ExercisesList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const ExerciseItem = styled(motion.button)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: ${(props) => props.theme.colors.bgDark};
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textSecondary};
	cursor: pointer;
	transition: all 0.2s ease;
	text-align: left;
	width: 100%;

	&:hover {
		border-color: rgba(64, 224, 208, 0.3);
		background: rgba(64, 224, 208, 0.05);
	}

	&.active {
		border-color: ${(props) => props.theme.colors.primary};
		background: rgba(64, 224, 208, 0.1);
		color: ${(props) => props.theme.colors.textPrimary};
	}
`;

export const Checkmark = styled.span`
	color: ${(props) => props.theme.colors.success};
	font-weight: 700;
`;

export const WorkoutPage = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 2rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const WorkoutHeader = styled.div`
	text-align: left;
	margin-bottom: 2rem;
`;

export const WorkoutHeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const BackButton = styled(motion.button)`
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: ${(props) => props.theme.colors.textSecondary};
	padding: 0.5rem 1rem;
	border-radius: 8px;
	cursor: pointer;
	margin-bottom: 1rem;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const WorkoutTitle = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.colors.textPrimary};
`;

export const WorkoutProgress = styled.div`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
`;

export const LoadingMessage = styled.div`
	text-align: center;
	padding: 4rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.2rem;
`;

export const RestDayMessage = styled.div`
	text-align: center;
	padding: 4rem 2rem;
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const RestDayTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.colors.textPrimary};
`;

export const RestDayText = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.1rem;
	margin-bottom: 2rem;
`;

export const PrimaryButton = styled(motion.button)`
	padding: 1rem 2rem;
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}
`;
