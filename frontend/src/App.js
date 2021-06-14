import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from './components/Pages/Profile/Sidebar/SidebarContainer/SidebarContainer.jsx'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8}>
            <main>

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
