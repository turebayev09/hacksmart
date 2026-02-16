import React from 'react';

const Auth = ({ onLogin }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', padding: '60px', textAlign: 'center', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', color: '#333' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Добро пожаловать в SchoolPool</h2>
      <p style={{ fontSize: '16px', marginBottom: '40px' }}>Сервис совместных поездок для родителей</p>
      <div style={{ marginTop: '30px' }}>
        <input type="email" placeholder="Школьная почта" style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
        <input type="password" placeholder="Пароль" style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '30px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
        <button 
          onClick={onLogin} 
          style={{ width: '100%', padding: '12px', background: '#4A90E2', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default Auth;