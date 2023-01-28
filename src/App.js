import "./App.scss";
import { GoogleMapPage } from "./Google_Map/Google_Map";
import { IPTracker } from "./IP_Tracker/IP_Tracker";

function App() {
	return (
		<div className="app">
			<IPTracker />
			<GoogleMapPage />
		</div>
	);
}

export default App;
