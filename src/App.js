import "./App.scss";
import { GoogleMap } from "./Google_Map/Google_Map";
import { IPTracker } from "./IP_Tracker/IP_Tracker";

function App() {
	return (
		<div className="app">
			<IPTracker />
			<GoogleMap />
		</div>
	);
}

export default App;
