import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = () => {
	const LogoLink = styled(Link)`
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: ${(props) => props.theme.colors.textPrimary};
		text-decoration: none;
		transition: transform 0.2s ease;

		&:hover {
			transform: scale(1.05);
		}
	`;

	const LogoIcon = styled.span`
		font-size: 1.5rem;
	`;

	const LogoText = styled.span`
		background: ${(props) => props.theme.gradients.primary};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	`;

	return (
		<LogoLink to={'/dashboard'}>
			<LogoIcon>💪</LogoIcon>
			<LogoText>Street Workout</LogoText>
		</LogoLink>
	);
};
