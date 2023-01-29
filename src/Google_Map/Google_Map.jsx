import { useCallback, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css"
import "./map.scss";
import MapBox, { Marker } from "react-map-gl"





const GoogleMapPage = () => {
  const [location, setLocation] = useState(null)

  const getIP = useCallback(async () => {
    const data = await fetch(process.env.REACT_APP_IPIFY_API),
      result = await data.json()
    console.log(result)
    const lng = await result.location.lng,
      lat = await result.location.lat
    setLocation({ lng, lat })
  }, [])

  return <div className="myMap">

    <div className="map">
      <MapBox mapboxAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
        initialViewState={
          {
            latitude: 6.5227,
            longitude: 3.6218,
            zoom: 11
          }
        }
        mapStyle='mapbox://styles/bazuaye/cldgwh5eu000301oj9tagvufq'
      >
        <Marker latitude={6.5227}
          longitude={3.6218} />
      </MapBox>
    </div>
  </div>
}

export { GoogleMapPage }