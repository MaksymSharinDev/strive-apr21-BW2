import React, { Component } from 'react'
import './MyFooter.css'
import { Container, Row, Col, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

export default class MyFooter extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <span><img src="https://logosmarken.com/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="logo" /></span>
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
                    <Col className='mr-5'>
                        <div className='d-flex'>
                            <span><BsFillQuestionSquareFill /></span>
                            <ListGroup>
                                <ListGroup.Item>Questions?</ListGroup.Item>
                                <ListGroup.Item>Visit our Help Center.</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className='d-flex'>
                            <span><IoSettingsSharp /></span>
                            <ListGroup>
                                <ListGroup.Item>Manage your account and privacy</ListGroup.Item>
                                <ListGroup.Item>Go to your Settings.</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col className='ml-5'>
                        <label for="cars">Select Language</label>

                        <select name="Language" id="Languages">
                            <option value="English">Elnglish (English)</option>
                            <option value="French">French</option>
                            <option value="Italian">Italian</option>
                            <option value="Deutsch">Deutsch</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <p>LinkedIn Corporation © 2021</p>
                </Row>
            </Container>
        )
    }
}
