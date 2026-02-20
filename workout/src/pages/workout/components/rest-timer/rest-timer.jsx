import { formatTime } from '../../../../utils';
import {
	RestTimer,
	RestTimerContainer,
	RestTimerControls,
	RestTimerSection,
	RestTimerTitle,
	TimerButtonPause,
	TimerButtonReset,
	TimerButtonStart,
	TimerIcon,
	TimerValue,
} from './rest-time-styles';

export const RestTimerComponent = ({
	restTime,
	isRestTimerRunning,
	onStart,
	onPause,
	onReset,
}) => {
	return (
		<RestTimerSection>
			<RestTimerTitle>Таймер</RestTimerTitle>
			<RestTimerContainer>
				<RestTimer>
					<TimerIcon>⏱️</TimerIcon>
					<TimerValue>{formatTime(restTime)}</TimerValue>
				</RestTimer>
				<RestTimerControls>
					{!isRestTimerRunning ? (
						<TimerButtonStart
							onClick={onStart}
							title="Запустить таймер"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							▶️ Старт
						</TimerButtonStart>
					) : (
						<TimerButtonPause
							onClick={onPause}
							title="Пауза"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							⏸️ Пауза
						</TimerButtonPause>
					)}
					<TimerButtonReset
						onClick={onReset}
						title="Сбросить"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						↻ Сброс
					</TimerButtonReset>
				</RestTimerControls>
			</RestTimerContainer>
		</RestTimerSection>
	);
};
