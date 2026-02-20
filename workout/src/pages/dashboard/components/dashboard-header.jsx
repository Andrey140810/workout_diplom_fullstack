import { useSelector } from 'react-redux';
import { selectUserLogin } from '../../../selectors';
import { PageSubtitle } from '../../components';
import { DashboardTitle } from './styles/dashboard-styles';

export const DashboardHeader = () => {
	const login = useSelector(selectUserLogin);
	return (
		<>
			<DashboardTitle>Привет, {login}! 👋</DashboardTitle>
			<PageSubtitle>Готовы к тренировке?</PageSubtitle>
		</>
	);
};
