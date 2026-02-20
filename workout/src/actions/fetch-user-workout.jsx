import { ACTION_TYPE } from './type';

export const fetchUserWorkouts =
	(requestServer, userId) => async (dispatch) => {
		dispatch({ type: ACTION_TYPE.FETCH_WORKOUTS_START });

		const result = await requestServer('getUserWorkouts', userId);

		if (result.error) {
			dispatch({
				type: ACTION_TYPE.WORKOUT_FAILURE,
				payload: result.error,
			});
			return;
		}

		dispatch({
			type: ACTION_TYPE.FETCH_WORKOUTS_SUCCESS,
			payload: result.res,
		});
	};
