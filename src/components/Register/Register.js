import { useState,useEffect } from "react";
import React  from 'react';
import {onRegisterHandler} from '../reducers/loginreducer';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Register = () => {


  useEffect(()=>{
    document.title='Register'
  },[])
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [getdeatils,setdetails]= useState({})
const onChangeHandler=(e)=>{
   setdetails({
    ...getdeatils,[e.target.name]:e.target.value
   })
}
const onSubHandler=(e)=>{
  e.preventDefault()
 if(getdeatils.password===getdeatils.confirmpassword){
  dispatch(onRegisterHandler(getdeatils))
  navigation('/login')
  
 }
}
  return (
    <div className="container-register" >
     
      <form className='container-register-main'>
      <h2>Sign Up</h2>
  <div className="container-register-sub">
    <label >Email address</label>
    <input onChange={onChangeHandler} name='email' placeholder="Enter email"/>
  
  </div>
  <div className="container-register-sub">
    <label>Password</label>
    <input type="password"  onChange={onChangeHandler} name='password' placeholder="Password"/>
  </div>
  <div className="container-register-sub">
    <label>Confirm Password</label>
    <input type="password"  onChange={onChangeHandler} name='confirmpassword' placeholder="Confirm Password"/>
  </div>

  <button type="submit" onClick={onSubHandler} >SignUp</button>
</form>
    </div>
    

  )
}

export default Register