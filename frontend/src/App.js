import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
// Import page stubs
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import MapPage from './pages/MapPage';
import WarehousePage from './pages/WarehousePage';
import DriversPage from './pages/DriversPage';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ color: '#fff', fontSize: 24 }}>Logistics Management</Header>
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/warehouse" element={<WarehousePage />} />
            <Route path="/drivers" element={<DriversPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
