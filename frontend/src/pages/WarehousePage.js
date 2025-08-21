import React, { useMemo, useState } from 'react';
import { Table, Button, Modal, Form, InputNumber, Input, Space } from 'antd';

const buildColumns = (onEdit) => [
  { title: 'Item', dataIndex: 'item', key: 'item' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Action', key: 'action', render: (_, record) => <Button type="link" onClick={() => onEdit(record)}>Edit</Button> },
];

const initialData = [
  { item: 'Widget A', quantity: 100 },
  { item: 'Widget B', quantity: 50 },
];

const WarehousePage = () => {
  const [items, setItems] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  const onEdit = (record) => {
    setEditing(record);
    form.setFieldsValue(record);
    setOpen(true);
  };

  const onAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const onSubmit = () => {
    form.validateFields().then((values) => {
      setItems((prev) => {
        const exists = prev.find((p) => p.item === values.item);
        if (exists && editing && editing.item !== values.item) {
          return prev.map((p) => (p.item === editing.item ? values : p));
        } else if (exists && !editing) {
          return prev.map((p) => (p.item === values.item ? values : p));
        } else if (editing) {
          return prev.map((p) => (p.item === editing.item ? values : p));
        }
        return [...prev, values];
      });
      setOpen(false);
    });
  };

  const columns = useMemo(() => buildColumns(onEdit), []);

  return (
    <div>
      <h2>Warehouse Inventory</h2>
      <Space style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={onAdd}>Add Item</Button>
      </Space>
      <Table columns={columns} dataSource={items} rowKey="item" />

      <Modal title={editing ? 'Edit Item' : 'Add Item'} open={open} onCancel={() => setOpen(false)} onOk={onSubmit} okText="Save">
        <Form layout="vertical" form={form}>
          <Form.Item name="item" label="Item" rules={[{ required: true, message: 'Item name is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Quantity is required' }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default WarehousePage;