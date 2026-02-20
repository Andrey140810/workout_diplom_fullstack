import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import styled from 'styled-components';
import { logout } from '../../../../actions';
import {
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors/index';

const UserPanel = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-left: 1rem;
	padding-left: 1rem;
	border-left: 1px solid rgba(255, 255, 255, 0.1);

	@media (max-width: 768px) {
		border-left: none;
		padding-left: 0;
		margin-left: 0;
	}
`;

const UserName = styled.span`
	color: ${(props) => props.theme.colors.textPrimary};
	font-weight: 500;
`;

const AuthButton = styled(motion.button)`
	background: rgba(64, 224, 208, 0.1);
	border: 1px solid rgba(64, 224, 208, 0.3);
	color: ${(props) => props.theme.colors.primary};
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 0.9rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: rgba(64, 224, 208, 0.2);
		border-color: ${(props) => props.theme.colors.primary};
	}
`;

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const isAuthenticated = !!session;

	const handleLogout = () => {
		dispatch(logout(session));
		localStorage.removeItem('userData');
		navigate('/login');
	};

	const handleLogin = () => {
		navigate('/login');
	};

	return (
		<UserPanel>
			{isAuthenticated && <UserName>{login}</UserName>}
			<AuthButton
				onClick={isAuthenticated ? handleLogout : handleLogin}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				{isAuthenticated ? 'Выход' : 'Вход'}
			</AuthButton>
		</UserPanel>
	);
};
