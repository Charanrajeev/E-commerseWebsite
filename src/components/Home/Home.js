import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
const Home = () => {
  const navigation = useNavigate();
  const onClickHandler=()=>{
    navigation('/products')
  }
  return (
    <div>
        <div className='container_for-bg'>
        <img className='image' src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="img-fluid" alt="Responsive image"></img>
        <button type="button" onClick={onClickHandler} id='btnLogin' className="btn btn-outline-success">Our Special</button>
        </div>

    </div>
  )
  
}

export default Home
