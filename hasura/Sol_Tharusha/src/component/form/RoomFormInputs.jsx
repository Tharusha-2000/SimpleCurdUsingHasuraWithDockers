import React from 'react';
import { Form, Input, Select, InputNumber, Button, Row, Col } from 'antd';

const { Option } = Select;

const RoomFormInputs = () => (
  <Row gutter={[16, 16]}>
    {/* RoomID_Rand */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="RoomID_Rand"
        rules={[{ required: true, message: 'Please input the Room ID Random' }]}
      >
        <Input placeholder="Room ID Random" />
      </Form.Item>
    </Col>

    {/* BusinessID */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="BusinessID"
        rules={[{ required: true, message: 'Please input Business ID' }]}
      >
        <Input placeholder="Business ID" />
      </Form.Item>
    </Col>

    {/* RoomType */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="RoomType"
        rules={[{ required: true, message: 'Please input the Room Type' }]}
      >
        <Input placeholder="Room Type" />
      </Form.Item>
    </Col>

    {/* NoOfRoomsAvailable */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="NoOfRoomsAvailable"
        rules={[{ required: true, message: 'Please input the number of rooms available' }]}
      >
        <InputNumber placeholder="No. of Rooms Available" min={1} style={{ width: '100%' }} />
      </Form.Item>
    </Col>

    {/* View */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="View"
        rules={[{ required: true, message: 'Please input the view' }]}
      >
        <Input placeholder="View" />
      </Form.Item>
    </Col>

    {/* RoomFacilities */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="RoomFacilities"
        rules={[{ required: true, message: 'Please input the Room Facilities' }]}
      >
        <Input placeholder="Room Facilities" />
      </Form.Item>
    </Col>

    {/* MealPlan */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="MealPlan"
        rules={[{ required: true, message: 'Please select a meal plan' }]}
      >
        <Select placeholder="Select Meal Plan">
          <Option value="None">None</Option>
          <Option value="Breakfast">Breakfast</Option>
          <Option value="Half Board">Half Board</Option>
          <Option value="Full Board">Full Board</Option>
        </Select>
      </Form.Item>
    </Col>

    {/* MaxNoOfAdults */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="MaxNoOfAdults"
        rules={[{ required: true, message: 'Please input the max number of adults' }]}
      >
        <InputNumber placeholder="Max No. of Adults" min={1} style={{ width: '100%' }} />
      </Form.Item>
    </Col>

    {/* MaxNoOfChildren */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="MaxNoOfChildren"
        rules={[{ required: true, message: 'Please input the max number of children' }]}
      >
        <InputNumber placeholder="Max No. of Children" min={0} style={{ width: '100%' }} />
      </Form.Item>
    </Col>

    {/* BedType */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="BedType"
        rules={[{ required: true, message: 'Please select a bed type' }]}
      >
        <Select placeholder="Select Bed Type">
          <Option value="Twin">Twin</Option>
          <Option value="Queen">Queen</Option>
          <Option value="King">King</Option>
        </Select>
      </Form.Item>
    </Col>

    {/* BathroomType */}
    <Col xs={24} sm={12} md={8}>
      <Form.Item
        name="BathroomType"
        rules={[{ required: true, message: 'Please select a bathroom type' }]}
      >
        <Select placeholder="Select Bathroom Type">
          <Option value="Private Bathroom">Private Bathroom</Option>
          <Option value="Shared Bathroom">Shared Bathroom</Option>
        </Select>
      </Form.Item>
    </Col>

    {/* Submit Button */}
    <Col xs={2}>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Room
        </Button>
      </Form.Item>
    </Col>
  </Row>
);

export default RoomFormInputs;
