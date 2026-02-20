import { ACTION_TYPE } from '../actions';

const initialProgramState = {
	programs: [],
	currentProgram: null,
	currentWeek: null,
	currentDay: null,
	userProgress: {},
};

export const programReducer = (state = initialProgramState, action) => {
	switch (action.type) {
		case ACTION_TYPE.UPDATE_USER_PROGRESS_SUCCESS: {
			const { userId, program, week, day } = action.payload;
			return {
				...state,
				userProgress: {
					...state.userProgress,
					[userId]: { program, week, day },
				},
			};
		}
		case ACTION_TYPE.SET_CURRENT_WORKOUT: {
			return {
				...state,
				currentProgram: action.payload.program,
				currentWeek: action.payload.week,
				currentDay: action.payload.day,
			};
		}
		default:
			return state;
	}
};
