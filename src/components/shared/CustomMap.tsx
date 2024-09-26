import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Circle,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const CustomMap = ({
  radius,
  setLatitude,
  style,
  address,
  setAddress,
  latitude,
  longitude,
  setLongitude,
}) => {
  const [map, setMap] = useState(null);

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
export default CustomMap;
