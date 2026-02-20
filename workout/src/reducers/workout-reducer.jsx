import { ACTION_TYPE } from '../actions';

const initialWorkoutState = {
	workouts: [],
	currentWorkout: null,
	error: null,
	stats: null,
	loading: false,
};

export const workoutReducer = (state = initialWorkoutState, action) => {
	switch (action.type) {
		case ACTION_TYPE.WORKOUT_START:
			return {
				...state,
				loading: true,
				error: null,
			};

		case ACTION_TYPE.FETCH_WORKOUTS_SUCCESS: {
			const payload = action.payload;
			const workouts = Array.isArray(payload)
				? payload
				: payload &&
					  typeof payload === 'object' &&
					  Array.isArray(payload.workouts)
					? payload.workouts
					: [];
			return {
				...state,
				workouts,
				loading: false,
				error: null,
			};
		}

		case ACTION_TYPE.SAVE_WORKOUT_SUCCESS:
			return {
				...state,
				workouts: [...state.workouts, action.payload],
				loading: false,
				error: null,
			};

		case ACTION_TYPE.FETCH_STATS_SUCCESS:
			return {
				...state,
				stats: action.payload,
				loading: false,
				error: null,
			};

		case ACTION_TYPE.WORKOUT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case ACTION_TYPE.SET_CURRENT_WORKOUT:
			return {
				...state,
				currentWorkout: action.payload,
			};

		case ACTION_TYPE.LOGOUT:
			return initialWorkoutState;
		default:
			return state;
	}
};
