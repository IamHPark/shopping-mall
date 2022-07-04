import './App.css';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './Card';

function App() {
  const [products, setProducts] = useState(data);
  const cards = products.map(product => {
    <Card
    id={product.id}
    title={product.title}
    price={product.price}
    content={product.content}
    />
  })

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className='nav-bar'>
        <Container>
          <Navbar.Brand href="#home" className=''>Shoes Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {products.map((product, i) =>
             <Card key={i} product={product} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;