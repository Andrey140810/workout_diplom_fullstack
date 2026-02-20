import { motion } from 'motion/react';
import styled from 'styled-components';

export const AuthContainer = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.gradients.dark};
	padding: 2rem;
`;

export const AuthCard = styled.div`
	background: ${(props) => props.theme.colors.bgCard};
	border-radius: 16px;
	padding: 3rem;
	width: 100%;
	max-width: 420px;
	box-shadow: ${(props) => props.theme.shadows.xl};
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const AuthTitle = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	background: ${(props) => props.theme.gradients.primary};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

export const AuthSubtitle = styled.p`
	color: ${(props) => props.theme.colors.textSecondary};
	margin-bottom: 2rem;
	font-size: 0.95rem;
`;

export const AuthFormGroup = styled.div`
	margin-bottom: 1.5rem;
`;

export const AuthFormLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 500;
	font-size: 0.9rem;
`;

export const AuthFormInput = styled.input`
	width: 100%;
	padding: 0.875rem 1rem;
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

	&::placeholder {
		color: ${(props) => props.theme.colors.textMuted};
	}
`;

export const AuthPrimaryButton = styled(motion.button)`
	width: 100%;
	padding: 1rem;
	background: ${(props) => props.theme.gradients.primary};
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	margin-top: 0.5rem;

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(64, 224, 208, 0.3);
	}

	&:active:not(:disabled) {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const AuthErrorMessage = styled.div`
	background: rgba(239, 68, 68, 0.1);
	border: 1px solid rgba(239, 68, 68, 0.3);
	color: #ef4444;
	padding: 0.875rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	font-size: 0.9rem;
`;

export const AuthSwitch = styled.p`
	text-align: center;
	margin-top: 2rem;
	color: ${(props) => props.theme.colors.textSecondary};
	font-size: 0.9rem;

	a {
		color: ${(props) => props.theme.colors.primary};
		font-weight: 600;
		text-decoration: none;
		transition: color 0.2s ease;

		&:hover {
			color: ${(props) => props.theme.colors.accent};
		}
	}
`;
