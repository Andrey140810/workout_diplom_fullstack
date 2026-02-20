import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserWorkouts } from '../actions';
import { useServerRequest } from '../hooks';

export const useLoadUserWorkouts = (userId) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	useEffect(() => {
		if (!userId) return;

		const load = async (userId) => {
			try {
				await dispatch(fetchUserWorkouts(requestServer, userId));
			} catch (error) {
				console.error('Ошибка загрузки тренировок', error);
			}
		};

		load();
	}, [userId, dispatch, requestServer]);
};
