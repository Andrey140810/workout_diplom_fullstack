import { request } from './request';

export const apiClient = {
	async authorize(login, password) {
		return request('/auth/login', 'POST', {
			login,
			password,
		});
	},

	async register(login, password) {
		return request('/auth/register', 'POST', {
			login,
			password,
		});
	},

	async logout() {
		return request('/auth/logout', 'POST');
	},

	async getSession() {
		return request('/api/users/me', 'GET');
	},

	async saveWorkout(workoutData) {
		return request('/api/workouts', 'POST', workoutData);
	},

	async getUserWorkouts() {
		return request('/api/workouts', 'GET');
	},

	async updateUserProgress(currentProgram, currentWeek, currentDay) {
		return request('/api/users/progress', 'PATCH', {
			currentProgram,
			currentWeek,
			currentDay,
		});
	},

	async getStats() {
		return request('/api/stats', 'GET');
	},
};
