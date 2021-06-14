import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export default class MyFooter extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>logo</h1>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>About</ListGroup.Item>
                            <ListGroup.Item>Community Guidlines</ListGroup.Item>
                            <ListGroup.Item>Privacy & Terms</ListGroup.Item>
                            <ListGroup.Item>Sales Solutions</ListGroup.Item>
                            <ListGroup.Item>Safety Center</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Accessibility</ListGroup.Item>
                            <ListGroup.Item>Careers</ListGroup.Item>
                            <ListGroup.Item>Ad Choices</ListGroup.Item>
                            <ListGroup.Item>Mobile</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Talent Solution</ListGroup.Item>
                            <ListGroup.Item>Marketing Solution</ListGroup.Item>
                            <ListGroup.Item>Advertising</ListGroup.Item>
                            <ListGroup.Item>Small Business</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Solutions</ListGroup.Item>
                            <ListGroup.Item>Visit our Help Center.</ListGroup.Item>
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item>Manage your account and privacy</ListGroup.Item>
                            <ListGroup.Item>Go to your Settings.</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <p>Select Language</p>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">English (English)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row></Row>
            </Container>
        )
    }
}
