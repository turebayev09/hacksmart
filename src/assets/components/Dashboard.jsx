import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
const data = [
  { name: 'Пн', trips: 45 },
  { name: 'Вт', trips: 52 },
  { name: 'Ср', trips: 48 },
  { name: 'Чт', trips: 61 },
  { name: 'Пт', trips: 55 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Dashboard = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: '#f5f7fb', borderRadius: '20px' }}>
      <h2 style={{ color: '#333', marginTop: 0, marginBottom: '30px', fontSize: '24px' }}>📊 Мониторинг SchoolPool</h2>
      
      {/* Верхние карточки */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: 1, padding: '20px', background: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Экономия топлива</p>
          <h3 style={{ margin: '10px 0 0 0', color: '#4CAF50', fontSize: '22px' }}>128 литров</h3>
        </div>
        <div style={{ flex: 1, padding: '20px', background: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Снижение трафика</p>
          <h3 style={{ margin: '10px 0 0 0', color: '#2196F3', fontSize: '22px' }}>-14%</h3>
        </div>
      </div>

      {/* График */}
      <div style={{ height: '300px', background: '#fff', padding: '20px', borderRadius: '15px' }}>
        <h4 style={{ marginTop: 0, marginBottom: '15px', fontSize: '16px' }}>Поездки за неделю</h4>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="trips" radius={[5, 5, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % 5]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;