import logo from './logo.svg';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            Option 1
          </Col>
          <Col>
            Options 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
