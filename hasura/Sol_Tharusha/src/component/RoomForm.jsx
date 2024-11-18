import React from 'react';
import { Form, message } from 'antd';
import axios from 'axios';
import RoomFormInputs from './form/RoomFormInputs';

const RoomForm = ({ onRoomAdded }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {

    try {
       const payload = { object: values };

     console.log(payload);
      console.log(values.RoomID_Rand);
      await axios.post('http://localhost:8080/api/rest/InsertRoom', payload);
      
      message.success('Room added successfully');
      onRoomAdded(); // Trigger data refresh in the table
      form.resetFields();
    } catch (error) {
      message.error('Failed to add room');
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <RoomFormInputs />
    </Form>
  );
};

export default RoomForm;

