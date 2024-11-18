import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const RoomTable = React.forwardRef((props, ref) => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    

    try {
      console.log('fetchRooms');
      const response = await axios.get('http://localhost:8080/api/rest/GetRooms');
      console.log('fetchs');
      setRooms(response.data.RoomDetails);
      
    } catch (error) {
      message.error('Failed to fetch rooms');
    }
  };

  // Expose fetchRooms to the parent component
  useImperativeHandle(ref, () => ({
    fetchRooms,
  }));

  // Fetch rooms when the component mounts
  useEffect(() => {
    fetchRooms();
  }, []);

  // Define table columns
  const columns = [
    { title: 'Room ID', dataIndex: 'RoomID', key: 'RoomID' },
    { title: 'Room ID Rand', dataIndex: 'RoomID_Rand', key: 'RoomID_Rand' },
    { title: 'Business ID', dataIndex: 'BusinessID', key: 'BusinessID' },
    { title: 'Room Type', dataIndex: 'RoomType', key: 'RoomType' },
    { title: 'No. of Rooms Available', dataIndex: 'NoOfRoomsAvailable', key: 'NoOfRoomsAvailable' },
    { title: 'View', dataIndex: 'View', key: 'View' },
    { title: 'RoomFacilities', dataIndex: 'RoomFacilities', key: 'RoomFacilities' }, 
    { title: 'Meal Plan', dataIndex: 'MealPlan', key: 'MealPlan' },
    { title: 'Max Adults', dataIndex: 'MaxNoOfAdults', key: 'MaxNoOfAdults' },
    { title: 'Max Children', dataIndex: 'MaxNoOfChildren', key: 'MaxNoOfChildren' },
    { title: 'Bed Type', dataIndex: 'BedType', key: 'BedType' },
    { title: 'Bathroom Type', dataIndex: 'BathroomType', key: 'BathroomType' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={rooms}
      rowKey="RoomID"
    />
  );
});

export default RoomTable;

