import { ACTION_TYPE } from './type';

export const fetchStats = (requestServer) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.FETCH_STATS_START });

	const result = await requestServer('getStats');

	if (result.error) {
		dispatch({
			type: ACTION_TYPE.FETCH_STATS_FAILURE,
			payload: result.error,
		});
		return;
	}

	dispatch({
		type: ACTION_TYPE.FETCH_STATS_SUCCESS,
		payload: result.res,
	});
};
