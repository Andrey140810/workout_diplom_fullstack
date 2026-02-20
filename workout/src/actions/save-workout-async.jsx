import { ACTION_TYPE } from './type';

export const saveWorkoutAsync =
	(requestServer, workoutData) => async (dispatch) => {
		dispatch({ type: ACTION_TYPE.WORKOUT_START });

		const result = await requestServer('saveWorkout', workoutData);

		if (result.error) {
			dispatch({
				type: ACTION_TYPE.WORKOUT_FAILURE,
				payload: result.error,
			});
			throw new Error(result.error);
		}

		dispatch({
			type: ACTION_TYPE.SAVE_WORKOUT_SUCCESS,
			payload: result.res,
		});

		return result.res;
	};
