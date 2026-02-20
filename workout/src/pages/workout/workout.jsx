import { useWorkout } from '../../hooks';
import { WorkoutView } from './components/workout-view/workout-view';

export const Workout = () => {
	const props = useWorkout();

	return <WorkoutView {...props} />;
};
