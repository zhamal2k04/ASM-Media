import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";
import "./LocationCard.css"
import marker from "../../../../Assets/Images/locationPng.png"

const Map = styled(MapContainer)`
  width: 100%;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border: 2px solid #716a7a;
  background-color: #191919;
  overflow: hidden;
  opacity: 1;
`;

const LeafLet = () => {
  
  const newMarker = new Icon({
    iconUrl: marker,
    iconSize: [40, 40],
  });

  return (
    <div className="leaflet-Container">
      <Map center={[41.271818, 69.231984]} id='mapcontainer' zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.271818, 69.231984]} icon={newMarker}>
          <Popup>
            <h1 style={{ textAlign: "center" }}>Bog'ibo'ston</h1>
            <span style={{ color: "#112", textAlign:'center' }}>
              <p>Наша здания</p>
            </span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default LeafLet;
