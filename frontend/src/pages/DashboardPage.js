import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const DashboardPage = () => (
  <div>
    <h2>Dashboard</h2>
    <Row gutter={16}>
      <Col span={8}><Card><Statistic title="Total Orders" value={123} /></Card></Col>
      <Col span={8}><Card><Statistic title="Revenue" prefix="$" value={12345} /></Card></Col>
      <Col span={8}><Card><Statistic title="Delivery Success Rate" value={98} suffix="%" /></Card></Col>
    </Row>
  </div>
);

export default DashboardPage;