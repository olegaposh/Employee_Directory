import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'



const Search = (props) => {


    return (

        


        <Row className="justify-content-center">
            <Col xs="6" md="4"sm="6" lg="3">
                <Form.Group controlId="formSearch">
                    <Form.Control className="shadow-sm"
                        name="search"
                        type="text"
                        placeholder="Search"
                        value={props.search}
                        onChange={props.handleInputChange} 
                        />
                </Form.Group>
            </Col>
        </Row>
    )
}



export default Search;