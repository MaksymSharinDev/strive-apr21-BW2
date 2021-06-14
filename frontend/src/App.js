import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import MyNavbar from './components/Pages/Profile/MyNavbar'
import Activities from "./components/Pages/Profile/Formation/FormationSection/Activities";
import Skills from "./components/Pages/Profile/Formation/FormationSection/Skills";
import Sidebar from './components/Pages/Profile/Sidebar/SidebarContainer/SidebarContainer.jsx'

function App() {
    return (
        <div className="App">
            <Container fluid>
                <nav style={{backgroundColor: 'white'}}>
                    <Container>
                        <MyNavbar/>
                    </Container>
                </nav>
            </Container>
            <Container>
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
        </div>
    );
}

export default App;
