import Header from './Routing/Header/Header';
import Home from './Routing/Home/Home';
import Login from './Routing/Login/Login';
import Product from './Routing/Product/Product';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
const App=()=>{
  const [getLoginStatus,setLoginStatus]=useState(false);
  
  return(
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='product' element={<Product/>}></Route>


    </Routes>
    </BrowserRouter>
    
    
  )
}
export default App