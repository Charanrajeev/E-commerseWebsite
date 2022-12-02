import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {onChangeHeader} from '../reducers/headerreducer';
import Myproducts from './Myproducts';

const Products = () => {
  const navigation = useNavigate()
  const dispatch=useDispatch()
  const [getVeri,setVeri] = useState(localStorage.getItem('token'))
 useEffect(()=>{
  if(localStorage.getItem('token')=='false')
  {
   navigation('/login')
  }
  else if(!localStorage.getItem('token'))
  {
    navigation('/register')
  }
  else {
    dispatch(onChangeHeader(true))

  }
 },[])
  return (<div>
    {localStorage.getItem('token')=='true'?<Myproducts/>:<div>you are not authurized</div>}
  
  </div>
   
  )
}

export default Products
