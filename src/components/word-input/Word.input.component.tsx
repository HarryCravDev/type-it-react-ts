import React, { useContext, useState } from "react";
import TypeItContext from "../../context/TypeItContext";

function WordInput() {
	const [text, setText] = useState<string>("");
	const { word, words, score, resetTime, time, gameOver, pause, dispatch } =
		useContext(TypeItContext);

	const checkAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("Check answer: ", gameOver);
		if (pause) {
			dispatch({ type: "START_GAME" });
		}

		const answer = e.target.value;
		setText(answer);

		const num = Math.floor(Math.random() * words.length);
		const newWord = words[num];

		if (answer === word) {
			setText("");
			dispatch({
				type: "CORRECT_WORD",
				score: score + 1,
				time: time,
				resetTime: !resetTime,
				word: newWord,
			});
		}
	};

	return (
		<div className="my-2">
			<input
				type="text"
				placeholder="Type here"
				className="input input-bordered w-full max-w-xs"
				value={text}
				onChange={checkAnswer}
			></input>
		</div>
	);
}

export default WordInput;
