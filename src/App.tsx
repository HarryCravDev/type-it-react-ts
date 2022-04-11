import "./App.css";
import { TypeItProvider } from "./context/TypeItContext";
import DisplayWord from "./components/display-word/display.word.component";
import WordInput from "./components/word-input/Word.input.component";
import GameControls from "./components/game-controls/game.control.component";
import { GameTime } from "./components/game-timer/game.timer.component";

function App() {
	return (
		<div className="App min-h-screen flex justify-center items-center flex-col">
			<TypeItProvider>
				<DisplayWord />
				<WordInput />
				<GameTime />
				<GameControls />
			</TypeItProvider>
		</div>
	);
}

export default App;
