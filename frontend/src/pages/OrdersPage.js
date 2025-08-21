import React, { useMemo, useState } from 'react';
import { Table, Button, Input, Tag, Drawer, Descriptions, Space } from 'antd';

const baseColumns = (onView) => [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (s) => <Tag color={s === 'Delivered' ? 'green' : s === 'Pending' ? 'gold' : 'blue'}>{s}</Tag> },
  { title: 'Action', key: 'action', render: (_, record) => <Button type="link" onClick={() => onView(record)}>View</Button> },
];

const data = [
  { id: 'ORD001', customer: 'John Doe', status: 'Pending', address: '12 Baker St', items: 3, total: 120 },
  { id: 'ORD002', customer: 'Jane Smith', status: 'Delivered', address: '90 River Rd', items: 1, total: 45 },
  { id: 'ORD003', customer: 'Alex Kim', status: 'In Transit', address: '21 Ocean Ave', items: 2, total: 76 },
];

const OrdersPage = () => {
  const [query, setQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter((d) => d.id.toLowerCase().includes(q) || d.customer.toLowerCase().includes(q) || d.status.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <h2>Orders</h2>
      <Space style={{ marginBottom: 12 }}>
        <Input.Search placeholder="Search by ID, customer or status" allowClear onSearch={setQuery} onChange={(e) => setQuery(e.target.value)} style={{ width: 360 }} />
      </Space>
      <Table columns={baseColumns(setSelectedOrder)} dataSource={filtered} rowKey="id" />

      <Drawer width={420} title={`Order ${selectedOrder?.id || ''}`} open={!!selectedOrder} onClose={() => setSelectedOrder(null)}>
        {selectedOrder && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Customer">{selectedOrder.customer}</Descriptions.Item>
            <Descriptions.Item label="Status"><Tag>{selectedOrder.status}</Tag></Descriptions.Item>
            <Descriptions.Item label="Address">{selectedOrder.address}</Descriptions.Item>
            <Descriptions.Item label="Items">{selectedOrder.items}</Descriptions.Item>
            <Descriptions.Item label="Total">${selectedOrder.total}</Descriptions.Item>
          </Descriptions>
        )}
      </Drawer>
    </div>
  );
};

export default OrdersPage;