import { WordState } from "../types/IWordState";

const typeItReducer = (
	state: WordState = { words: [], loading: false },
	action: { type: string; data: string[] }
) => {
	switch (action.type) {
		case "GET_WORDS":
			return {
				...state,
				words: action.data,
				loading: false,
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "CLEAR_WORDS":
			return {
				...state,
				words: [],
				loading: false,
			};
		default:
			return state;
	}
};

export default typeItReducer;
