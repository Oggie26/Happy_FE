import React from 'react';
import { Card, Row, Col } from 'antd';

const DashboardPage = () => (
  <div>
    <h2>Dashboard</h2>
    <Row gutter={16}>
      <Col span={8}><Card title="Total Orders">123</Card></Col>
      <Col span={8}><Card title="Revenue">$12,345</Card></Col>
      <Col span={8}><Card title="Delivery Success Rate">98%</Card></Col>
    </Row>
  </div>
);

export default DashboardPage;