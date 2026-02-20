import { ACTION_TYPE } from './type';

export const updateUserProgressAsync =
	(requestServer, program, week, day) => async (dispatch) => {
		dispatch({ type: ACTION_TYPE.UPDATE_USER_PROGRESS_START });

		const result = await requestServer(
			'updateUserProgress',
			program,
			week,
			day,
		);

		if (result.error) {
			dispatch({
				type: ACTION_TYPE.UPDATE_USER_PROGRESS_FAILURE,
				payload: result.error,
			});
			throw new Error(result.error);
		}

		dispatch({
			type: ACTION_TYPE.UPDATE_USER_PROGRESS_SUCCESS,
			payload: result.res,
		});

		return result.res;
	};
