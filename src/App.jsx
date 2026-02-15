import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ padding: '40px', background: '#f4f7f6', minHeight: '100vh', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#2c3e50' }}>🏙️ SmartCity: HackSmart Dashboard</h1>
      <p>Статус системы: <span style={{ color: 'green' }}>Активна</span></p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', flex: 1 }}>
          <h3>🚦 Светофоры</h3>
          <p>Все объекты онлайн</p>
        </div>
        <div style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', flex: 1 }}>
          <h3>🔋 Энергосеть</h3>
          <p>Нагрузка: 42%</p>
        </div>
      </div>
    </div>
  )
}
export default App