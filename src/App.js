import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import NavBar from './components/Nav';
import Detail from './pages/Detail';
import Main from './components/Main';
import data from './data'
import { useState } from 'react';
import axios from 'axios';

// import Event from './components/Event';

function App() {
  const [products, setProducts] = useState(data);

  const getData = () => {
    if(products.length === 3) {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then(res => {
        let copy = products;
        setProducts([...copy, ...res.data])

      })
    }
}


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main products={products} setProducts={setProducts}/>} />
        <Route path="/products" element={<Main products={products}/>} />
        <Route path="/detail/:id" element={<Detail products={products}/>}/>
        {/* <Route path="/event" element={<Event/>}> */}
          {/* <Route path='one' element={<h3>This is Event One</h3>}/> */}
          {/* <Route path='two' element={<h3>This is Event Two</h3>}/> */}
        {/* </Route> */}
      </Routes>
      <button className="main-btn" onClick={getData}>More Products</button>
    </div>
  );
}

export default App;

function Event() {
  return (
      <div>
          <h1>EVENT PAGE</h1>
          <Outlet></Outlet>
      </div>
  )
}