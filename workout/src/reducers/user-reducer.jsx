import { ACTION_TYPE } from '../actions/type';
import { ROLE } from '../constants';

const initialUserState = {
	session: null,
	id: null,
	login: null,
	roleId: ROLE.GUEST,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return { ...state, ...action.payload };
		}
		case ACTION_TYPE.UPDATE_USER_PROGRESS_SUCCESS: {
			return {
				...state,
				currentProgram:
					action.payload.currentProgram || state.currentProgram,
				currentWeek: action.payload.currentWeek || state.currentWeek,
				currentDay: action.payload.currentDay || state.currentDay,
			};
		}
		case ACTION_TYPE.LOGOUT:
			return initialUserState;
		default:
			return state;
	}
};
