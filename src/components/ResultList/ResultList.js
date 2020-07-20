import React from 'react';
import './ResultList.css'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'



const ResultList = (props) => {


const formatDate = (d) => {

  var date = new Date(d);
  return(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());

}
  
  if (props.results.length > 0) {
    // console.log(props.results[0].id.value)
    // console.log(props.results[0].picture.thumbnail)
    // console.log(props.results[0].name.first)
    // console.log(props.results[0].cell)
    // console.log(props.results[0].email)
    // console.log(props.results[0])
  }
  
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr class="black white-text">
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
            <td>{formatDate(item.dob.date)}</td>
          </tr>))} 

      </tbody>
    </Table>

    <table class="table">
  <thead class="black white-text">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="grey lighten-2">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>3




</>
  )

}

export default ResultList;