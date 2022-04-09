import React, { useContext, useEffect, useState } from "react";
import TypeItContext from "../../context/TypeItContext";

function GameControls() {
	const { score, gameOver, resetTime, time, pause, loading, dispatch } =
		useContext(TypeItContext);
	const [emoji, setEmoji] = useState(String.fromCodePoint(128526));
	
	useEffect(() => {

		if(score === 0){
			setEmoji(String.fromCodePoint(129300));
		}

		if(score > 5){
			setEmoji(String.fromCodePoint(128293));
		}

		if(score > 10){
			setEmoji(String.fromCodePoint(129321));
		}

		if(score > 15){
			setEmoji(String.fromCodePoint(128125));
		}

	}, [gameOver]);

	const changeDifficulty = (difficulty: number) => {
		// Todo - Run function to change game time by difficulty
		console.log(difficulty);
		dispatch({
			type: "CHANGE_DIFFICULTY",
			time: difficulty,
			timerChange: true,
		});
	};

	const resetGame = () => {
		dispatch({ type: "RESET_GAME", time, score: 0, resetTime: !resetTime });
	};

	const pauseGame = () => {
		dispatch({ type: "PAUSE", pause: !pause });
		console.log("Pause game...");
	};


	return (
		<div>
			<h1 className="my-2">Score: {score} { gameOver && <span>{emoji}</span>}</h1>
			{gameOver || pause ? (
				<div>
					<button
						onClick={() => changeDifficulty(7)}
						className="btn btn-success"
					>
						Easy
					</button>
					<button
						onClick={() => changeDifficulty(5)}
						className="btn btn-warning mx-3"
					>
						Medium
					</button>
					<button onClick={() => changeDifficulty(3)} className="btn btn-error">
						Hard
					</button>
				</div>
			) : (
				<div>
					<button onClick={pauseGame} className="btn btn-primary">
						Pause
					</button>
				</div>
			)}

			{gameOver && (
				<button onClick={resetGame} className="mt-3 w-full btn btn-primary">
					Reset Game
				</button>
			)}
		</div>
	);
}

export default GameControls;
