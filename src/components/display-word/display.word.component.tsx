import React, { useContext, useEffect } from "react";
import { getWords } from "../../context/TypeItAction";
import TypeItContext from "../../context/TypeItContext";

const DisplayWord: React.FC = () => {
	const { words, loading, dispatch } = useContext(TypeItContext);

	useEffect(() => {
		dispatch({ type: "SET_LOADING" });
		console.log({ words, loading });

		const data = getWords();
		dispatch({ type: "GET_WORDS", data });
		console.log({ words, loading });
	}, []);

	return (
		<div>
			{words ? (
				<div>
					{words.map((word: string, index: number) => (
						<h1 key={index}>{word}</h1>
					))}
				</div>
			) : (
				<div>
					<h1>No words..</h1>
				</div>
			)}
		</div>
	);
};

export default DisplayWord;
