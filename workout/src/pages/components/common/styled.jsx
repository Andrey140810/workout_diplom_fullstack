import styled from 'styled-components';
import { motion } from 'framer-motion';

const mobileBreakpoint = '@media (max-width: 768px)';

export const PageContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	box-sizing: border-box;
	overflow-x: hidden;
	width: 100%;

	${mobileBreakpoint} {
		padding: 1rem;
		overflow-x: hidden;
		width: 100%;
		box-sizing: border-box;
	}
`;

export const PageHeader = styled.div`
	margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	background: ${(props) => props.theme.colors.textPrimary};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-align: left;

	${mobileBreakpoint} {
		font-size: 1.75rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const PageSubtitle = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.1rem;
	text-align: left;
	margin-bottom: 1rem;

	${mobileBreakpoint} {
		font-size: 1rem;
	}
`;

export const Card = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: ${(props) => props.theme.shadows.lg};
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;

	${mobileBreakpoint} {
		padding: 1.5rem;
		box-sizing: border-box;
		overflow: hidden;
	}
`;

export const CardDark = styled.div`
	background: ${(props) => props.theme.colors.bgDark};
	border-radius: 12px;
	padding: 1.5rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-sizing: border-box;
	min-width: 0;
	overflow: hidden;

	${mobileBreakpoint} {
		padding: 1.25rem;
		min-width: 0;
		overflow: hidden;
		box-sizing: border-box;
	}
`;

export const Button = styled(motion.button)`
	padding: 1rem;
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const ButtonSecondary = styled(motion.button)`
	padding: 0.75rem 1.5rem;
	background: ${(props) => props.theme.colors.bgCard};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.95rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const ButtonGhost = styled(motion.button)`
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: ${(props) => props.theme.colors.textSecondary};
	padding: 0.5rem 1rem;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease;
	font-size: 0.95rem;

	&:hover {
		border-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	${mobileBreakpoint} {
		min-width: 0;
		overflow: hidden;
	}
`;

export const FormLabel = styled.label`
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 500;
	font-size: 0.9rem;

	${mobileBreakpoint} {
		font-size: 0.85rem;
	}
`;

export const FormInput = styled.input`
	padding: 0.875rem;
	background: ${(props) => props.theme.colors.bgDark};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.1);
	}

	${mobileBreakpoint} {
		font-size: 0.95rem;
		padding: 0.75rem;
		box-sizing: border-box;
		width: 100%;
	}
`;

export const FormSelect = styled.select`
	padding: 0.875rem;
	background: ${(props) => props.theme.colors.bgDark};
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: ${(props) => props.theme.colors.textPrimary};
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.1);
	}

	${mobileBreakpoint} {
		font-size: 0.95rem;
		padding: 0.75rem;
		box-sizing: border-box;
		width: 100%;
	}
`;

export const FormRow = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-bottom: 1.5rem;

	${mobileBreakpoint} {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(${(props) => props.minWidth || '200px'}, 1fr)
	);
	gap: ${(props) => props.gap || '1.5rem'};

	${mobileBreakpoint} {
		grid-template-columns: ${(props) => props.mobileColumns || '1fr'};
		gap: ${(props) => props.mobileGap || '0.75rem'};
		min-width: 0;
	}
`;

export const Badge = styled.span`
	background: ${(props) => props.theme.gradients.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.85rem;
	font-weight: 600;
	white-space: nowrap;

	${mobileBreakpoint} {
		font-size: 0.75rem;
		padding: 0.4rem 0.8rem;
	}
`;

export const Loading = styled.div`
	text-align: center;
	padding: 4rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1.2rem;
`;

export const Section = styled.div`
	margin-top: ${(props) => props.marginTop || '2rem'};
	margin-bottom: ${(props) => props.marginBottom || '2rem'};
`;

export const SectionTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.textPrimary};
	margin-bottom: 1.5rem;

	${mobileBreakpoint} {
		font-size: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;

export const TabsContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
	border-bottom: 2px solid rgba(255, 255, 255, 0.1);

	${mobileBreakpoint} {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: thin;
	}
`;

export const TabButton = styled(motion.button)`
	padding: 1rem 2rem;
	background: transparent;
	border: none;
	border-bottom: 3px solid transparent;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	margin-bottom: -2px;

	&:hover {
		color: ${(props) => props.theme.colors.textPrimary};
	}

	&.active {
		color: ${(props) => props.theme.colors.primary};
		border-bottom-color: ${(props) => props.theme.colors.primary};
	}

	${mobileBreakpoint} {
		padding: 0.75rem 1.25rem;
		font-size: 0.9rem;
		white-space: nowrap;
		flex-shrink: 0;
	}
`;
