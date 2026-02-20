/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
	selectAuthUser,
	selectStatsData,
	selectWorkoutData,
	selectWorkoutLoading,
} from '../../selectors';
import { Loading } from './components/styles/statistics-styles';
import { StatisticsView } from './components';
import { useLoadUserWorkouts } from '../../utils';

export const Statistics = () => {
	const user = useSelector(selectAuthUser);
	const stats = useSelector(selectStatsData);
	const workouts = useSelector(selectWorkoutData);
	const loading = useSelector(selectWorkoutLoading);
	const [workoutList, setWorkoutList] = useState([]);

	useLoadUserWorkouts(user?.id);

	useEffect(() => {
		if (workouts && workouts.length > 0) {
			const validWorkouts = workouts.filter((workout) => {
				const completedDate = workout.completedAt || workout.createdAt;
				if (!completedDate) return false;
				const date = new Date(completedDate);
				if (Number.isNaN(date.getTime())) return false;

				if (!workout.program || !workout.program.level) return false;

				return true;
			});

			setWorkoutList([...validWorkouts].reverse());
		} else {
			setWorkoutList([]);
		}
	}, [workouts]);

	if (loading || !user) {
		return <Loading>Загрузка...</Loading>;
	}

	return <StatisticsView stats={stats} workoutsList={workoutList} />;
};
