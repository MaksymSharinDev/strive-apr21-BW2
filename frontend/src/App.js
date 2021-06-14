import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Activities from "./components/Pages/Profile/Formation/FormationSection/Activities";
import Skills from "./components/Pages/Profile/Formation/FormationSection/Skills";
import Sidebar from './components/Pages/Profile/Sidebar/SidebarContainer/SidebarContainer.jsx'
import MyFooter from './components/Pages/Profile/MyFooter';
import MyNavbar from './components/Pages/Profile/MyNavbar';


function App() {
    return (
        <div className="App">
            <Container fluid>
                <nav style={{backgroundColor: 'white', borderBottom: 'gray'}}>
                    <Container>
                        <MyNavbar/>
                    </Container>
                </nav>
            </Container>
            <Container className={'mt-5'}>
                <Row>
                    <Col xs={8}>
                        <main>
                            <Activities/>
                            <Skills/>
                        </main>
                    </Col>
                    <Col xs={4}>
                        <aside>
                            <Sidebar/>
                        </aside>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <MyFooter/>
            </Container>
        </div>
    );
}

export default App;
