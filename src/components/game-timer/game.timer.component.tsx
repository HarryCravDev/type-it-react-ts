import React, { useContext, useEffect, useState } from "react";
import TypeItContext from "../../context/TypeItContext";

export const GameTime: React.FC = () => {
	const { time, gameOver, inGame, dispatch, resetTime, timerChange, pause } =
		useContext(TypeItContext);
	const [timer, setTimer] = useState<number>(time);

	useEffect(() => {
		if (resetTime) {
			setTimer(time);
			dispatch({ type: "RESET_TIME", resetTime: false });
		}

		if (!inGame || pause) {
			return;
		}

		if (timerChange) {
			dispatch({ type: "RESET_TIME_CHANGE" });
			setTimer(time);
		}

		if (gameOver) {
			return setTimer(time);
		}

		if (timer === 0) {
			dispatch({ type: "GAME_OVER" });
			return;
		}

		const timeout = setTimeout(() => {
			setTimer(timer - 1);
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [timer, resetTime, gameOver, pause]);

	return (
		<div>
			<progress
				className="progress progress-warning w-56"
				value={timer}
				max={time}
			></progress>
		</div>
	);
};
