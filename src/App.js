import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import NavBar from './components/Nav';
import Detail from './pages/Detail';
import Main from './components/Main';
import data from './data'
import { useState } from 'react';
import axios from 'axios';
import Cart from './pages/Cart';

// import Event from './components/Event';

function App() {
  const [products, setProducts] = useState(data);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    if(products.length === 3) {
      axios.get('https://iamhpark.github.io/shop/shoes.json')
      .then(res => {
        let copy = products;
        setProducts([...copy, ...res.data])

      })
      setShow(false)
    }
}

console.log(show)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main products={products} handleClick={handleClick} show={show}/>} />
        <Route path="/products" element={<Main products={products} handleClick={handleClick} show={show}/>} />
        <Route path="/detail/:id" element={<Detail products={products}/>}/>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/event" element={<Event/>}> */}
          {/* <Route path='one' element={<h3>This is Event One</h3>}/> */}
          {/* <Route path='two' element={<h3>This is Event Two</h3>}/> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;

