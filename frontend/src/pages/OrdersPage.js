import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Action', key: 'action', render: () => <Button type="link">View</Button> },
];

const data = [
  { id: 'ORD001', customer: 'John Doe', status: 'Pending' },
  { id: 'ORD002', customer: 'Jane Smith', status: 'Delivered' },
];

const OrdersPage = () => (
  <div>
    <h2>Orders</h2>
    <Table columns={columns} dataSource={data} rowKey="id" />
  </div>
);

export default OrdersPage;