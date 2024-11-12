// components/MapComponent.js

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix leaflet's missing marker icon issue
const customIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"), // path to your custom marker icon
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"), // retina icon path
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"), // shadow path
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: [16, -28], // point from which the tooltip should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

// Optional: Define a custom icon
// const customIcon = new L.Icon({
//   iconUrl: "/path/to/custom-icon.png", // Update this path to your custom icon
//   iconSize: [32, 32], // Adjust size if needed
//   iconAnchor: [16, 32], // Positioning of the icon
// });

const MapComponent = () => {
  useEffect(() => {
    // Fix for Next.js SSR by ensuring leaflet only loads on the client side
    import("leaflet");
  }, []);

  return (
    <MapContainer
      center={[41.8727973, -87.6504384]}
      zoom={13}
      style={{ height: "300px", width: "40%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
        tileSize={512}
        zoomOffset={-1}
      />
      <TileLayer url="https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg" />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Custom location marker */}
      <Marker position={[41.8727973, -87.6504384]} icon={customIcon}>
        <Popup>Custom Location in San Francisco!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
