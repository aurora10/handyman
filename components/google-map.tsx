"use client"

import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 51.0637,
  lng: 3.1044
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#CAD5E2",
  fillOpacity: 0.15,
  center: center,
  radius: 35000,
};

const GoogleMapComponent = () => {
  const onMapLoad = React.useCallback((map: google.maps.Map) => {
    map.setOptions({
      restriction: {
        latLngBounds: {
          north: 51.5,
          south: 50.5,
          west: 2.5,
          east: 4.0,
        },
        strictBounds: false,
      },
    });
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API || ""}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
        onLoad={onMapLoad}
      >
        <Circle options={circleOptions} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapComponent)