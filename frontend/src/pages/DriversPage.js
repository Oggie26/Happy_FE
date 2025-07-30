import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Driver', dataIndex: 'driver', key: 'driver' },
  { title: 'Vehicle', dataIndex: 'vehicle', key: 'vehicle' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const data = [
  { driver: 'Alice', vehicle: 'Truck 1', status: 'Available' },
  { driver: 'Bob', vehicle: 'Van 2', status: 'On Delivery' },
];

const DriversPage = () => (
  <div>
    <h2>Drivers</h2>
    <Table columns={columns} dataSource={data} rowKey="driver" />
  </div>
);

export default DriversPage;