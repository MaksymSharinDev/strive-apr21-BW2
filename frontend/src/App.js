import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import {Col, Container, Row} from "react-bootstrap";

import MyNavbar from "./components/Pages/Profile/MyNavbar";
import Profile from './components/Pages/Profile/Profile.jsx'
import Feed from "./components/Pages/Feed/Feed";

import Sidebar from "./components/Pages/Profile/Sidebar/SidebarContainer/SidebarContainer";
import MyFooter from "./components/Pages/Profile/MyFooter";



function App() {
    return (
        <div className="App" style={{backgroundColor: 'darkcyan'}}>

            <Router>
                <Container fluid className={'p-0'}>
                    <nav style={{backgroundColor: "white", borderBottom: "gray"}}>
                        <Container>
                            <MyNavbar/>
                        </Container>
                    </nav>
                </Container>
                <Container className={"mt-5"}>
                    <Row>
                        <Col xs={8}>
                            <main>
                                <Switch>
                                    <Route path="/">
                                        <Profile/>
                                    </Route>
                                    <Route path="/profile">
                                        <Profile/>
                                    </Route>
                                    <Route path="/feed">
                                        <Feed/>
                                    </Route>
                                </Switch>
                            </main>
                        </Col>
                        <Col xs={4}>
                            <aside>
                                <Sidebar/>
                            </aside>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{backgroundColor: 'white', padding: '5px', marginTop: '10px'}}>
                    <MyFooter/>
                </Container>
            </Router>
        </div>
    );
}

export default App;
