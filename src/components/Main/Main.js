import React from 'react';
import './Main.css'
import friends from "../../friends.json"
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'


const Main = (props) => {
    console.log(friends)
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
      
    {friends.map(item => 
        (<tr key={item.id}>
            <td><Image className="img" src={item.image} thumbnail /></td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.DOB}</td>
        </tr>))}
        
  </tbody>
</Table>
        
    )

}

export default Main;