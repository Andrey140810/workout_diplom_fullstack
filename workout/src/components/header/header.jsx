import styled from 'styled-components';
import { ControlPanel, Logo, Navbar } from './components';

const HeaderContainer = ({ className }) => {
	const HeaderInner = styled.div`
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
		}
	`;
	return (
		<header className={className}>
			<HeaderInner>
				<Logo />
				<Navbar />
				<ControlPanel />
			</HeaderInner>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	background: ${(props) => props.theme.colors.bgCard};
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	padding: 1rem 0;
	position: sticky;
	top: 0;
	z-index: 100;
	backdrop-filter: blur(10px);
`;
