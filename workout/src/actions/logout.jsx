import { apiClient } from '../utils/apiClient';
import { ACTION_TYPE } from './type';

export const logout = () => (dispatch) => {
	apiClient
		.logout()
		.then(() => {
			localStorage.removeItem('userData');
			dispatch({
				type: ACTION_TYPE.LOGOUT,
			});
		})
		.catch((error) => {
			console.error('Ошибка при выходе', error);
			localStorage.removeItem('userData');
			dispatch({
				type: ACTION_TYPE.LOGOUT,
			});
		});
};
