export interface IAction {
    type: string;
    data: string[];
    word: string;
    score: number;
    time: number;
    resetTime: boolean;
    pause: boolean;
    timerChange: boolean;
};