import React from 'react';

const Map = () => {
  return (
    <div style={{ height: '300px', background: '#f0f0f0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #4A90E2', margin: '30px 0' }}>
      <div style={{ textAlign: 'center', color: '#4A90E2' }}>
        <p style={{ fontSize: '48px', margin: '0 0 15px 0' }}>📍</p>
        <p style={{ fontSize: '16px', margin: 0 }}>Здесь будет Google Maps</p>
      </div>
    </div>
  );
};

export default Map;