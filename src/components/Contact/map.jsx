import React from "react";
import GoogleMapReact from 'google-map-react';
import configData from './../../config.json'

export default function LocationMap() {
  return (
    <div style={{ height: '20vh', width: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: configData.GOOGLEAPIKEY }}
        defaultCenter={configData.AGENCYLOCATION}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  );
}