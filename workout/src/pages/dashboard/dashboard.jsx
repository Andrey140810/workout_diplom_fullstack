/* eslint-disable react-hooks/set-state-in-effect */
import {
	CurrentWorkout,
	DashboardHeader,
	ProgramsSectionContainer,
} from './components';
import { PageContainer } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAuthUser,
	selectStatsData,
	selectWorkoutData,
} from '../../selectors';
import { MainStats } from '../statistics/components';
import {
	getNextWorkout,
	getUserCurrentWorkout,
	useLoadUserWorkouts,
} from '../../utils';
import { Loading } from './components/styles/dashboard-styles';
import { useServerRequest } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
import { fetchStats, setUser, updateUserProgressAsync } from '../../actions';

export const Dashboard = () => {
	const user = useSelector(selectAuthUser);
	const stats = useSelector(selectStatsData);
	const completedWorkouts = useSelector(selectWorkoutData);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const hasUpdatedProgress = useRef(false);

	useLoadUserWorkouts(user.id);

	useEffect(() => {
		if (user?.id) {
			dispatch(fetchStats(requestServer));
		}
	}, [user?.id, dispatch, requestServer]);

	const [workoutInfo, setWorkoutInfo] = useState(null);

	useEffect(() => {
		if (user && completedWorkouts !== undefined) {
			const info = getUserCurrentWorkout(user, completedWorkouts);
			setWorkoutInfo(info);
		} else {
			setWorkoutInfo(null);
		}
	}, [user, completedWorkouts]);

	useEffect(() => {
		if (!user?.id) {
			hasUpdatedProgress.current = false;
			return;
		}

		const nextWorkout = getNextWorkout(user, completedWorkouts);

		const needsUpdate =
			user.currentProgram !== nextWorkout.nextProgram ||
			user.currentWeek !== nextWorkout.nextWeek ||
			user.currentDay !== nextWorkout.nextDay;

		if (needsUpdate && !hasUpdatedProgress.current) {
			hasUpdatedProgress.current = true;
			dispatch(
				updateUserProgressAsync(
					requestServer,
					nextWorkout.nextProgram,
					nextWorkout.nextWeek,
					nextWorkout.nextDay,
				),
			)
				.then(() => {
					return requestServer('getSession');
				})
				.then((result) => {
					if (!result.error && result.res?.user) {
						dispatch(setUser(result.res.user));
					}
				})
				.catch((error) => {
					console.error('Ошибка обновления прогресса', error);
					hasUpdatedProgress.current = false;
				});
		}
	}, [user, dispatch, requestServer, completedWorkouts]);

	if (!workoutInfo) {
		return <Loading>Загрузка...</Loading>;
	}

	const { currentProgram, currentWeek, currentDay } = workoutInfo;
	const programKey = user?.currentProgram || 'beginner';
	const weekNum = currentWeek.week;
	const dayNum = currentDay.day;

	return (
		<PageContainer>
			<DashboardHeader />
			{stats && <MainStats stats={stats} />}
			<CurrentWorkout
				currentProgram={currentProgram}
				currentDay={currentDay}
				weekNum={weekNum}
				dayNum={dayNum}
				programKey={programKey}
			/>
			<ProgramsSectionContainer />
		</PageContainer>
	);
};
