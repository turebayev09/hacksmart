import React, { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Map from './components/Map';
import Chat from './components/Chat';   
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('map');

  if (!isLoggedIn) {
    return <Auth onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0', padding: '40px 60px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#4A90E2', margin: 0, fontSize: '32px' }}>BIRoad</h2>
        <button onClick={() => setIsLoggedIn(false)} style={{ padding: '10px 20px', fontSize: '14px' }}>Выход</button>
      </header>

      <div style={{ display: 'flex', marginBottom: '40px', gap: '20px' }}>
        <button onClick={() => setActiveTab('map')} style={{ flex: 1, padding: '12px', fontSize: '16px', background: activeTab === 'map' ? '#4A90E2' : '#eee', color: activeTab === 'map' ? 'white' : 'black' }}>Карта</button>
        <button onClick={() => setActiveTab('stats')} style={{ flex: 1, padding: '12px', fontSize: '16px', background: activeTab === 'stats' ? '#4A90E2' : '#eee', color: activeTab === 'stats' ? 'white' : 'black' }}>Аналитика</button>
      </div>

      {activeTab === 'map' ? (
        <>
          <Map />
          <Chat />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
