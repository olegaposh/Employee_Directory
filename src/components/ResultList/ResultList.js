import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "./ResultList.css"

const ResultList = (props) => {
  
const formatDate = (d) => {

  var date = new Date(d);
  return(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());

}

  const data = {
    columns: [
      {
        label: 'Image',
        field: 'Image'
      
      },
      {
        label: 'Name',
        field: 'Name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Phone',
        field: 'Phone',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'Email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Date of Birth',
        field: 'dob',
        sort: 'asc',
        width: 150
      }
    ],
    rows: props.results.map(item => (
      {
            Image: <img src={`${item.picture.thumbnail}`}></img>,
            Name: `${item.name.first} ${item.name.last}`,
            Phone: item.cell,
            Email: item.email,
            dob: formatDate(item.dob.date)
      }
    ))
  };

  return (
    <MDBDataTable 
    responsive
      striped
      bordered
      small
      searching={false}
      data={data}
    />
  );
}

export default ResultList;


// import React from 'react';
// import './ResultList.css'
// import Image from 'react-bootstrap/Image'
// import Table from 'react-bootstrap/Table'



// const ResultList = (props) => {


// const formatDate = (d) => {

//   var date = new Date(d);
//   return(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());

// }
  
//   if (props.results.length > 0) {
//     // console.log(props.results[0].id.value)
//     // console.log(props.results[0].picture.thumbnail)
//     // console.log(props.results[0].name.first)
//     // console.log(props.results[0].cell)
//     // console.log(props.results[0].email)
//     // console.log(props.results[0])
//   }
  
//   return (
//     <>
//     <Table striped bordered hover>
//       <thead>
//         <tr class="black white-text">
//           <th>Image</th>
//           <th>Name</th>
//           <th>Phone</th>
//           <th>Email</th>
//           <th>DOB</th>
//         </tr>
//       </thead>
//       <tbody>

//           {props.results.map(item =>
//           (<tr key={item.phone}> 
//             <td><Image className="img" src={item.picture.thumbnail} thumbnail /></td>
//             <td>{item.name.first} {item.name.last}</td>
//             <td>{item.cell}</td>
//             <td>{item.email}</td>
//             <td>{formatDate(item.dob.date)}</td>
//           </tr>))} 

//       </tbody>
//     </Table>




// </>
//   )

// }

// export default ResultList;