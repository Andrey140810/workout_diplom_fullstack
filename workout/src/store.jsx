import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import {
	logoutReducer,
	userReducer,
	workoutReducer,
	programReducer,
	staticticReducer,
} from './reducers';
import { setUser } from './actions';

const reducer = combineReducers({
	logout: logoutReducer,
	user: userReducer,
	workout: workoutReducer,
	program: programReducer,
	stats: staticticReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);

const loadUserFromStorage = () => {
	try {
		const userData = localStorage.getItem('userData');
		if (userData) {
			const user = JSON.parse(userData);
			store.dispatch(setUser(user));
		}
	} catch (error) {
		console.error('Ошибка загрузки сессии', error);
		localStorage.removeItem('userData');
	}
};

loadUserFromStorage();
