import React, { useContext, useEffect } from "react";
import { getWords } from "../../context/TypeItAction";
import TypeItContext from "../../context/TypeItContext";

const DisplayWord: React.FC = () => {
	const { word, words, gameOver, loading, dispatch } = useContext(TypeItContext);

	useEffect(() => {
		dispatch({ type: "SET_LOADING" });

		const data = getWords();
		dispatch({ type: "GET_WORDS", data });

		dispatch({
			type: "GET_WORD",
			word: data[Math.floor(Math.random() * data.length)],
		});
	}, []);

	return (
		<div>
			{
				!gameOver ? 
				<div>
					<h1 className="p-3 text-5xl font-bold">{word}</h1>
				</div>
				:
				<div>
					<h1 className="p-3 text-5xl font-bold text-primary-content">Game Over</h1>
				</div>
			}
			{
				!words && 
				<div>
					<h1 className="p-3 text-5xl font-bold">No words...</h1>
				</div>
			}
		</div>
	);
};

export default DisplayWord;
