export const formatWorkoutDate = (dateString) => {
	if (!dateString) return 'Дата не указана';
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return 'Дата не указана';

	return date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};
