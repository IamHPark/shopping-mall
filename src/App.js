import './App.css';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import data from './data';
import Card from './Card';
import NavBar from './Nav';
import Detail from './Detail';

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
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <Container>
              <Row>
                {products.map((product, i) =>
                  <Card key={i} product={product} />
                )}
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;