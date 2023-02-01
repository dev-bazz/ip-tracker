import "mapbox-gl/dist/mapbox-gl.css";
import "./map.scss";
import MapBox, { Marker } from "react-map-gl";
import { useMachine } from "@xstate/react";
import appState from "../machines/machine.js";

const GoogleMapPage = () => {
	const [state] = useMachine(appState),
		{
			context: {
				data: { lat, lon },
			},
		} = state;

	return (
		<div className="myMap">
			<div className="map">
				<MapBox
					mapboxAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
					initialViewState={{
						latitude: lat,
						longitude: lon,
						zoom: 1,
					}}
					mapStyle="mapbox://styles/bazuaye/cldgwh5eu000301oj9tagvufq">
					<Marker
						latitude={lat}
						longitude={lon}
					/>
				</MapBox>
			</div>
		</div>
	);
};

export { GoogleMapPage };
