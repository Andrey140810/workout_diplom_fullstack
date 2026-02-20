import styled from 'styled-components';
import { CardDark } from '../../../components';
import { motion } from 'motion/react';

export const RestTimerSection = styled(CardDark)`
	margin: 2rem 0;
`;

export const RestTimerTitle = styled.h3`
	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1rem;
`;

export const RestTimerContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const RestTimer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	background: ${(props) => props.theme.colors.bgCard};
	padding: 1rem 1.5rem;
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: ${(props) => props.theme.shadows.md};
	flex: 0 0 auto;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const TimerIcon = styled.span`
	font-size: 1.5rem;
`;

export const TimerValue = styled.span`
	font-size: 2rem;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: ${(props) => props.theme.colors.primary};
	min-width: 80px;
	text-align: center;
	letter-spacing: 0.05em;
`;

export const RestTimerControls = styled.div`
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}
`;

export const TimerButton = styled(motion.button)`
	padding: 0.75rem 1.25rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 0.95rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	white-space: nowrap;

	@media (max-width: 768px) {
		flex: 1;
		justify-content: center;
	}
`;

export const TimerButtonStart = styled(TimerButton)`
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	color: white;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}
`;

export const TimerButtonPause = styled(TimerButton)`
	background: ${(props) => props.theme.colors.bgCard};
	border-color: ${(props) => props.theme.colors.warning};
	color: ${(props) => props.theme.colors.warning};

	&:hover {
		background: rgba(224, 184, 80, 0.1);
		border-color: ${(props) => props.theme.colors.warning};
		transform: translateY(-2px);
	}
`;

export const TimerButtonReset = styled(TimerButton)`
	background: ${(props) => props.theme.colors.bgCard};
	border-color: ${(props) => props.theme.colors.textSecondary};
	color: ${(props) => props.theme.colors.textSecondary};

	&:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: ${(props) => props.theme.colors.textPrimary};
		color: ${(props) => props.theme.colors.textPrimary};
	}
`;
