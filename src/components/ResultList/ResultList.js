import React from 'react';
import './ResultList.css'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'


const ResultList = (props) => {
  if (props.results.length > 0) {
    // console.log(props.results[0].id.value)
    // console.log(props.results[0].picture.thumbnail)
    // console.log(props.results[0].name.first)
    // console.log(props.results[0].cell)
    // console.log(props.results[0].email)
    // console.log(props.results[0])
  }
  
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

          {props.results.map(item =>
          (<tr key={item.phone}> 
            <td><Image className="img" src={item.picture.thumbnail} thumbnail /></td>
            <td>{item.name.first} {item.name.last}</td>
            <td>{item.cell}</td>
            <td>{item.email}</td>
            <td>{item.dob.date}</td>
          </tr>))} 

      </tbody>
    </Table>

  )

}

export default ResultList;