import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
// Import page stubs
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import MapPage from './pages/MapPage';
import WarehousePage from './pages/WarehousePage';
import DriversPage from './pages/DriversPage';
import { AuthProvider, useAuth } from './auth/AuthContext';

const { Header, Content, Sider } = Layout;

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { token: { colorBgContainer } } = theme.useToken();
  return (
    <AuthProvider>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider breakpoint="lg" collapsedWidth="0">
            <div style={{ color: '#fff', textAlign: 'center', padding: 16, fontWeight: 600 }}>Logistics</div>
            <Menu theme="dark" mode="inline">
              <Menu.Item key="dashboard"><Link to="/dashboard">Dashboard</Link></Menu.Item>
              <Menu.Item key="orders"><Link to="/orders">Orders</Link></Menu.Item>
              <Menu.Item key="map"><Link to="/map">Map</Link></Menu.Item>
              <Menu.Item key="warehouse"><Link to="/warehouse">Warehouse</Link></Menu.Item>
              <Menu.Item key="drivers"><Link to="/drivers">Drivers</Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ color: '#fff', fontSize: 20, display: 'flex', alignItems: 'center', gap: 16 }}>Logistics Management</Header>
            <Content style={{ margin: '24px 16px' }}>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                  <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
                  <Route path="/map" element={<ProtectedRoute><MapPage /></ProtectedRoute>} />
                  <Route path="/warehouse" element={<ProtectedRoute><WarehousePage /></ProtectedRoute>} />
                  <Route path="/drivers" element={<ProtectedRoute><DriversPage /></ProtectedRoute>} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
