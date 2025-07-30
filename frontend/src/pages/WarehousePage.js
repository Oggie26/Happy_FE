import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Item', dataIndex: 'item', key: 'item' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
];

const data = [
  { item: 'Widget A', quantity: 100 },
  { item: 'Widget B', quantity: 50 },
];

const WarehousePage = () => (
  <div>
    <h2>Warehouse Inventory</h2>
    <Table columns={columns} dataSource={data} rowKey="item" />
  </div>
);

export default WarehousePage;