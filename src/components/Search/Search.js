import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'



const Search = (props) => {


    return (

        


        <Row className="justify-content-center">
            <Col sm="4">
                <Form.Group controlId="formSearch">
                    <Form.Control
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