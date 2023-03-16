import React, { useEffect, useState } from 'react';
import '../../App.css'

import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthenticate } from '../reducers/loginreducer';

const Login = () => {
  useEffect(()=>{
    document.title='Login'
  },[])
  const change=useSelector((state)=>state.login.valid)
  const navigation = useNavigate()
  const dispatch=useDispatch()
 const [getLogin,setLogin]=useState({})
 const onChangeHandler=(e)=>{
  setLogin({...getLogin,[e.target.name]:e.target.value})
 }
 const onSubHandler=(e)=>{
  e.preventDefault();
  if(dispatch(onAuthenticate(getLogin)))//its done fine here 
  navigation('/products')//fine here

 }
  return (
     <div className="container-register" >
     
     <form className='container-register-main'>
     <h2>Please Login</h2>
 <div className="container-register-sub">
   <label >Email address</label>
   <input onChange={onChangeHandler} name='email' placeholder="Enter email"/>
 
 </div>
 <div className="container-register-sub">
   <label>Password</label>
   <input type="password"  onChange={onChangeHandler} name='password' placeholder="Password"/>
 </div>
 

 <button type="submit" onClick={onSubHandler} >Login</button>
</form>
   </div>



  )
}

export default Login