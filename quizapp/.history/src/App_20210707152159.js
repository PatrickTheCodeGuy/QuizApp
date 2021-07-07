import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row sm={2} class="startMenu-container">
          <Col>
            Option 1
          </Col>
          <Col xs={8}>
            Options 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
