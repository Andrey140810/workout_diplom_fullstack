import { useEffect, useState } from 'react';
import { getWorkoutProgram } from '../../utils';

export const useWorkoutData = (level, week, day) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);

		if (!level || !week || !day) {
			setError('Не указаны параметры тренировки');
			setData(null);
			setLoading(false);
			return;
		}

		try {
			const program = getWorkoutProgram(level);

			if (!program) {
				setError('Программа не найдена');
				setData(null);
				setLoading(false);
				return;
			}

			const weekNum = parseInt(week, 10);
			const dayNum = parseInt(day, 10);

			if (isNaN(weekNum) || isNaN(dayNum)) {
				setError('Некорректные параметры недели или дня');
				setData(null);
				setLoading(false);
				return;
			}

			const targetWeek = program.weeks.find((w) => w.week === weekNum);

			if (!targetWeek) {
				setError('Неделя не найдена');
				setData(null);
				setLoading(false);
				return;
			}

			const targetDay = targetWeek.days.find((d) => d.day === dayNum);

			if (!targetDay) {
				setError('День не найден');
				setData(null);
				setLoading(false);
				return;
			}

			setData({
				name: targetDay.name,
				exercises: targetDay.exercises || [],
			});
		} catch (err) {
			setError('Ошибка при загрузке данных');
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, [level, week, day]);

	return { workoutData: data, loading, error };
};
