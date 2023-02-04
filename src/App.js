import { useMachine } from "@xstate/react";
import { useRef } from "react";
import "./App.scss";
import { GoogleMapPage } from "./Google_Map/Google_Map";
import { IPTracker } from "./IP_Tracker/IP_Tracker";
import appState from "./machines/machine";

function App() {
	const inputElement = useRef();
	const [state, send] = useMachine(appState);

	const { context } = state;
	console.log(context.isLoading, "is Loading");
	if (context.isLoading === true) {
		return (
			<div className="loading">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className="app">
			<IPTracker
				compRef={inputElement}
				state={state}
				send={send}
			/>
			<GoogleMapPage />
		</div>
	);
}

export default App;
