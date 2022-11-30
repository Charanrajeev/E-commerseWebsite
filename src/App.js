import React from 'react'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart'
import Aboutus from './components/aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';

//in app.js i have setup all pages routes
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>  
        {/* header is available at any place */}
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
            <Route path='contactus' element={<Contactus/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App