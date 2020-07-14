import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


const Search = () => {
    return (

        <Row className="justify-content-center">
            <Col md="4">
                <Form.Group controlId="formSearch">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
            </Col>
        </Row>
    )

}

export default Search;