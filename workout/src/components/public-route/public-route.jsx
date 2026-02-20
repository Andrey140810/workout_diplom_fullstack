import { useSelector } from 'react-redux';
import { selectUserSession } from '../../selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
	const session = useSelector(selectUserSession);

	if (session) {
		return <Navigate to="/dashboard" replace />;
	}

	return children;
};
