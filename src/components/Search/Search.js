import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import friends from '../../friends.json'
// import Main from '../Main/Main'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

// console.log(friends.name)

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {

            search: ""

        }
    }
    handleInputChange = (event) => {
        this.setState({ search: event.target.value })

    }
    async componentDidMount() {
        console.log("I'm a componentDidMount")
        const url = "https://randomuser.me/api/?results=50";
        const response = await fetch(url);
        const data = await response.json()
        console.log(data.results[0].name)
    }


    render() {
        // DIDNT WORK
        // const filteredSearch = friends.filter(
        //     (contact) => {

        //         return contact.name.indexOf(this.state.search) !== -1;

        //     }
        // )
        // WORKED
        const filteredSearch = friends.filter((data) => {
            if(this.state.search === "")
            return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()))
            return data
        })

        return (
            <>
                <Row className="justify-content-center">
                    <Col md="4">
                        <Form.Group controlId="formSearch">
                            <Form.Control
                                name="search"
                                type="text"
                                placeholder="Search"
                                value={this.state.search}
                                onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

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

                        {filteredSearch.map(item =>
                            (<tr key={item.id}>
                                <td><Image className="img" src={item.image} thumbnail /></td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.DOB}</td>
                            </tr>))}

                    </tbody>
                </Table>
            </>
        )





    }
}


export default Search;