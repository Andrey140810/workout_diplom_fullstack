import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
`;

const NavbarLink = styled(Link)`
	color: ${(props) => props.theme.colors.textSecondary};
	text-decoration: none;
	font-weight: 500;
	transition: color 0.2s ease;
	position: relative;
	padding-bottom: 4px;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}

	&.active {
		color: ${(props) => props.theme.colors.primary};
	}
`;

const NavbarLinkUnderline = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 2px;
	background: ${(props) => props.theme.colors.primary};
	border-radius: 2px;
`;

export const Navbar = () => {
	const location = useLocation();

	const navLinks = [
		{ to: '/dashboard', label: 'Главная' },
		{ to: '/programs', label: 'Программы' },
		{ to: '/nutrition', label: 'Питание' },
		{ to: '/statistic', label: 'Статистика' },
	];

	const isActive = (path) => {
		if (path === '/dashboard') {
			return location.pathname === '/dashboard';
		}
		return location.pathname.startsWith(path);
	};

	return (
		<NavbarMenu>
			{navLinks.map((link) => (
				<NavbarLink
					key={link.to}
					to={link.to}
					className={isActive(link.to) ? 'active' : ''}
				>
					{link.label}
					{isActive(link.to) && (
						<NavbarLinkUnderline
							layoutId="navbar-underline"
							initial={false}
							transition={{
								type: 'spring',
								stiffness: 380,
								damping: 30,
							}}
						/>
					)}
				</NavbarLink>
			))}
		</NavbarMenu>
	);
};
