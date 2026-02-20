import { ACTION_TYPE } from '../actions';

const initialStaticticState = {
	streak: 0,
	totalWorkouts: 0,
	totalTime: 0,
	totalExercises: 0,
	totalRepeads: 0,
	achievements: [],
	weeklyProgress: [],
};

export const staticticReducer = (state = initialStaticticState, action) => {
	switch (action.type) {
		case ACTION_TYPE.FETCH_STATS_SUCCESS: {
			const payload = action.payload;
			const statsData = payload?.stats || payload;
			return {
				...state,
				...statsData,
			};
		}

		case ACTION_TYPE.LOGOUT:
			return initialStaticticState;

		default:
			return state;
	}
};
