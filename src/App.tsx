import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TypeItProvider } from "./context/TypeItContext";
import DisplayWord from "./components/display-word/display.word.component";

function App() {
	return (
		<div className="App">
			<TypeItProvider>
				<DisplayWord />
			</TypeItProvider>
		</div>
	);
}

export default App;
