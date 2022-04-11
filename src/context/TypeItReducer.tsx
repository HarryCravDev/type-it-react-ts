import { IAction } from "../types/IAction";
import { WordState } from "../types/IWordState";
import { initialState } from "./TypeItContext";
const typeItReducer = (state: WordState = initialState, action: IAction) => {
	switch (action.type) {
		case "GET_WORDS":
			return {
				...state,
				words: action.data,
				loading: false,
			};
		case "GET_WORD":
			return {
				...state,
				word: action.word,
				loading: false,
			};
		case "CORRECT_WORD":
			return {
				...state,
				word: action.word,
				score: action.score,
				time: action.time,
				resetTime: action.resetTime,
				loading: false,
			};
		case "GAME_OVER":
			return {
				...state,
				gameOver: true,
				inGame: false,
			};
		case "START_GAME":
			return {
				...state,
				gameOver: false,
				pause: false,
				resetTime: action.resetTime,
				inGame: true,
			};
		case "RESET_GAME":
			return {
				...state,
				gameOver: false,
				time: action.time,
				score: action.score,
				resetTime: action.resetTime,
			};
		case "RESET_TIME":
			return {
				...state,
				resetTime: action.resetTime,
			};
		case "RESET_TIME_CHANGE":
			return {
				...state,
				timerChange: false,
			};
		case "CHANGE_DIFFICULTY":
			return {
				...state,
				time: action.time,
				timerChange: action.timerChange,
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "PAUSE":
			return {
				...state,
				pause: action.pause,
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
