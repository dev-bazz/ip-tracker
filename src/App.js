import "./App.scss";
import { GoogleMap } from "./Google_Map/Google_Map";
import { IPTracker } from "./IP_Tracker/IP_Tracker";

function App() {
	return (
		<div className="app">
			<h1>Hello World</h1>
			<IPTracker />
			<GoogleMap />
		</div>
	);
}

export default App;
