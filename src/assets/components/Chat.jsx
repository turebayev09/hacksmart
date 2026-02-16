import React from 'react';

const Chat = () => {
  return (
    <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '10px', marginTop: '30px' }}>
      <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '16px' }}>💬 Чат родителей</h3>
      <div style={{ height: '120px', background: '#fff', padding: '12px', marginBottom: '15px', borderRadius: '8px', overflowY: 'auto', fontSize: '14px' }}>
        Алина: Кто завтра заберет детей с секции?
      </div>
      <input type="text" placeholder="Написать..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
    </div>
  );
};

export default Chat;