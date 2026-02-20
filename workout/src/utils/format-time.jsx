export const formatTime = (secondsTotal) => {
	const minutes = Math.floor(secondsTotal / 60);
	const seconds = secondsTotal % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};
