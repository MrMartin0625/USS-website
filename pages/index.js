import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const HomePage = () => {
  // Coordinates for Gary, Indiana
  const position = [41.5934, -87.3464];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-green-100 to-blue-100">
      {/* Header Section */}
      <section className="text-center mb-10">
        <img src="/logo.png" alt="Urban Sustainability Solutions Logo" className="mx-auto mb-6 w-48" />
        <h1 className="text-5xl font-bold text-green-700 mb-4">Urban Sustainability Solutions</h1>
        <p className="text-xl text-gray-700 mb-6">Empowering Urban Communities for a Greener Future</p>
        <button className="bg-green-600 hover:bg-green-800 text-white px-6 py-3 rounded-xl shadow-md">
          Get Involved
        </button>
      </section>

      {/* Focus Areas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-4 text-center shadow-xl bg-white rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Renewable Energy</h2>
          <p className="text-gray-600">Solar panels, wind energy, and efficient energy systems for urban development.</p>
        </div>

        <div className="p-4 text-center shadow-xl bg-white rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Green Spaces</h2>
          <p className="text-gray-600">Promoting community parks, rooftop gardens, and urban forests.</p>
        </div>

        <div className="p-4 text-center shadow-xl bg-white rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">STEM Education</h2>
          <p className="text-gray-600">Collaborating with local schools to foster environmental education and innovation.</p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="mb-10">
        <h3 className="text-2xl text-green-800 mb-4 text-center">Project Locations</h3>
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>Urban Sustainability Solutions: Gary, Indiana</Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h3 className="text-2xl text-green-800 mb-3">Join Us in Building Sustainable Cities</h3>
        <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-md">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;
