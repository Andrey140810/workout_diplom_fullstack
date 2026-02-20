import { useCallback } from 'react';
import { apiClient } from '../utils/apiClient';

export const useServerRequest = () => {
	return useCallback((operation, ...params) => {
		return apiClient[operation](...params);
	}, []);
};
