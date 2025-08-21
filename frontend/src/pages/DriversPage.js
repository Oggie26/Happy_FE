import React, { useMemo, useState } from 'react';
import { Table, Tag, Select, Drawer, Descriptions, Space, Input } from 'antd';

const buildColumns = (onSelect) => [
  { title: 'Driver', dataIndex: 'driver', key: 'driver' },
  { title: 'Vehicle', dataIndex: 'vehicle', key: 'vehicle' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (s) => <Tag color={s === 'Available' ? 'green' : s === 'On Delivery' ? 'blue' : 'gold'}>{s}</Tag> },
  { title: 'Assign', key: 'assign', render: (_, record) => (
    <Select
      placeholder="Assign order"
      style={{ width: 160 }}
      options={mockOrders.map((o) => ({ label: o.id, value: o.id }))}
      onChange={(val) => onSelect(record, val)}
    />
  ) },
];

const data = [
  { driver: 'Alice', vehicle: 'Truck 1', status: 'Available', phone: '090-111-2222' },
  { driver: 'Bob', vehicle: 'Van 2', status: 'On Delivery', phone: '090-333-4444' },
  { driver: 'Cathy', vehicle: 'Bike 3', status: 'Break', phone: '090-555-6666' },
];

const mockOrders = [
  { id: 'ORD001' },
  { id: 'ORD002' },
  { id: 'ORD003' },
];

const DriversPage = () => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter((d) => d.driver.toLowerCase().includes(q) || d.vehicle.toLowerCase().includes(q) || d.status.toLowerCase().includes(q));
  }, [query]);

  const handleAssign = (driver, orderId) => {
    setSelected({ ...driver, orderId });
  };

  return (
    <div>
      <h2>Drivers</h2>
      <Space style={{ marginBottom: 12 }}>
        <Input.Search placeholder="Search drivers" allowClear onSearch={setQuery} onChange={(e) => setQuery(e.target.value)} style={{ width: 280 }} />
      </Space>
      <Table columns={buildColumns(handleAssign)} dataSource={filtered} rowKey="driver" />

      <Drawer title="Assignment" open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Driver">{selected.driver}</Descriptions.Item>
            <Descriptions.Item label="Vehicle">{selected.vehicle}</Descriptions.Item>
            <Descriptions.Item label="Phone">{selected.phone}</Descriptions.Item>
            <Descriptions.Item label="Assigned Order">{selected.orderId}</Descriptions.Item>
          </Descriptions>
        )}
      </Drawer>
    </div>
  );
};

export default DriversPage;