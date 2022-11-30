import React, { useEffect, useState } from 'react';
import './Login.css';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthenticate } from '../reducers/loginreducer';

const Login = () => {
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
    <div className='conatiner_for_login'>
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" name='password' placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onSubHandler}>Submit</button>
</form>
    </div>
  )
}

export default Login