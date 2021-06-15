import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Activities from "./components/Pages/Profile/Formation/FormationSection/Activities";
import Skills from "./components/Pages/Profile/Formation/FormationSection/Skills";
import Sidebar from "./components/Pages/Profile/Sidebar/SidebarContainer/SidebarContainer.jsx";
import MyFooter from "./components/Pages/Profile/MyFooter";
import MyNavbar from "./components/Pages/Profile/MyNavbar";
import About from "./components/Pages/Profile/Formation/About";
import ExpEduCert from "./components/ExpEduCert";

function App() {
  return (
    <div className="App" style={{backgroundColor: 'darkcyan'}}>
      <style>
        {'main .card{padding: 25px;}\n'}
      </style>
      <Container fluid className={'p-0'}>
        <nav style={{ backgroundColor: "white", borderBottom: "gray" }}>
          <Container>
            <MyNavbar />
          </Container>
        </nav>
      </Container>
      <Container className={"mt-5"}>
        <Row>
          <Col xs={8}>
            <main>
              <About />
              <Activities />
              <ExpEduCert />
              <Skills />
            </main>
          </Col>
          <Col xs={4}>
            <aside>
              <Sidebar />
            </aside>
          </Col>
        </Row>
      </Container>

        <Container fluid style={{backgroundColor: 'white', padding: '5px',marginTop: '10px'}}>
            <MyFooter />

        </Container>
    </div>
  );
}

export default App;
