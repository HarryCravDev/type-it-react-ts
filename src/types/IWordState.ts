export interface WordState {
	words: string[];
	word: string;
	score: number;
	time: number;
	gameOver: boolean;
	loading: boolean;
	resetTime: boolean;
	pause: boolean;
	timerChange: boolean;
}
