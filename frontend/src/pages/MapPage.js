import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card } from 'antd';
import 'leaflet/dist/leaflet.css';

const markers = [
  { id: 'DRV01', position: [51.505, -0.09], label: 'Alice' },
  { id: 'DRV02', position: [51.51, -0.1], label: 'Bob' },
  { id: 'DRV03', position: [51.495, -0.083], label: 'Cathy' },
];

const MapPage = () => (
  <div>
    <h2>Delivery Map</h2>
    <Card>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '420px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={m.position}>
            <Popup>{m.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Card>
  </div>
);

export default MapPage;