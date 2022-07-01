import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Nice Shoes</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      <h1>Shopping mall</h1>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;