import { createContext, useReducer } from "react";
import typeItReducer from "./TypeItReducer";
import { WordState } from "../types/IWordState";

const TypeItContext = createContext<any>(undefined);

export const initialState: WordState = {
	words: [],
	word: "",
	score: 0,
	time: 5,
	resetTime: false,
	gameOver: false,
	pause: true,
	loading: false,
	timerChange: false,
};

export const TypeItProvider = ({ children }: { children: any }) => {
	// const initialState: WordState = {
	// 	words: [],
	// 	word: "",
	// 	score: 0,
	// 	loading: false,
	// };

	const [state, dispatch] = useReducer(typeItReducer, initialState);

	return (
		<TypeItContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</TypeItContext.Provider>
	);
};

export default TypeItContext;
