import { ACTION_TYPE } from '../actions';

const initialLogoutState = {
	wasLogout: false,
};

export const logoutReducer = (state = initialLogoutState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT: {
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		}
		default:
			return state;
	}
};
