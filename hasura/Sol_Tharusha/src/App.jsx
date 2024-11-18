import React, { useRef } from 'react';
import { Layout, Typography, Divider } from 'antd';
import './App.css';
import RoomForm from './component/RoomForm';
import RoomTable from './component/RoomTable';

const { Title } = Typography;
const { Content } = Layout;

const App = () => {
  const tableRef = useRef(null);

  const handleRoomAdded = () => {
    if (tableRef.current) {
      tableRef.current.fetchRooms(); // Refresh data in the table
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', padding: '20px' }}>
      <Content className="app-content">
        <Title level={2} className="section-title">Add Room</Title>
        <RoomForm onRoomAdded={handleRoomAdded} />
        <Divider />
        <Title level={1} className="section-title">Room List</Title>
        <RoomTable ref={tableRef} />
      </Content>
    </Layout>
  );
};

export default App;



