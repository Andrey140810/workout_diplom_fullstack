import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProgramDetailHeader = styled.div`
	margin-bottom: 3rem;
`;

export const ProgramDetailTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: #fff;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ProgramDetailSubtitle = styled.p`
	color: rgba(255, 255, 255, 0.9);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ProgramMeta = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 1rem;
	color: rgba(255, 255, 255, 0.9);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const BackButton = styled(Link)`
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: ${(props) => props.theme.colors.textSecondary};
	padding: 0.5rem 1rem;
	border-radius: 8px;
	cursor: pointer;
	margin-bottom: 1rem;
	transition: all 0.2s ease;
	text-decoration: none;
	display: inline-block;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const WeeksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const WeekCard = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const WeekTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const DaysGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const DayCard = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.2s ease;

	&:hover {
		border-color: rgba(64, 224, 208, 0.3);
		transform: translateY(-2px);
	}
`;

export const DayHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

export const DayTitle = styled.h3`
	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 600;
`;

export const DayName = styled.span`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;
`;

export const DayExercises = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const DayExerciseItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem;
	background: rgba(255, 255, 255, 0.02);
	border-radius: 6px;
`;

export const ExerciseName = styled.span`
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 500;
`;

export const ExerciseReps = styled.span`
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;
`;

export const RestDayBadge = styled.div`
	text-align: center;
	padding: 1rem;
	color: ${(props) => props.theme.colors.textMuted};
	font-style: italic;
	background: rgba(255, 255, 255, 0.02);
	border-radius: 6px;
`;

export const StartWorkoutDayButton = styled(motion.button)`
	width: 100%;
	margin-top: 1rem;
	padding: 0.75rem 1.5rem;
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

export const ProgramsPage = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const ProgramCardLarge = styled(Link)`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;
	position: relative;
	overflow: hidden;

	&:hover {
		transform: translateY(-4px);
		box-shadow: ${(props) => props.theme.shadows.xl};
		border-color: ${(props) => props.theme.colors.primary};
	}
`;

export const ProgramCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1rem;
	text-align: left;
`;

export const ProgramCardTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
`;

export const ProgramBadge = styled.span`
	background: ${(props) => props.theme.gradients.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.85rem;
	font-weight: 600;
	white-space: nowrap;
`;

export const ProgramDescription = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	margin-bottom: 1.5rem;
	line-height: 1.6;
	text-align: left;
`;

export const ProgramStats = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${(props) => props.theme.colors.textMuted};
	font-size: 0.9rem;
	margin-bottom: 1rem;
	text-align: left;
`;

export const ProgramArrow = styled.div`
	position: absolute;
	bottom: 1.5rem;
	right: 2rem;
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.primary};
	transition: transform 0.2s ease;

	${ProgramCardLarge}:hover & {
		transform: translateX(4px);
	}
`;
