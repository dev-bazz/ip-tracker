import "mapbox-gl/dist/mapbox-gl.css";
import "./map.scss";
import MapBox, { Marker } from "react-map-gl";
import { useMachine } from "@xstate/react";
import appState from "../machines/machine";
import { useEffect } from "react";

const GoogleMapPage = () => {
	const [state] = useMachine(appState),
		{
			context: {
				data: { lat, lon },
			},
		} = state;
	useEffect(() => {
		console.log(lat, lon);
	}, [lat, lon]);

	return (
		<div className="myMap">
			<div className="map">
				<MapBox
					mapboxAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
					initialViewState={{
						latitude: lat,
						longitude: lon,
						zoom: 11,
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
