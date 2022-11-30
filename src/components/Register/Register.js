import { useState } from "react";
import React  from 'react';
import {onRegisterHandler} from '../reducers/loginreducer';
import {useDispatch} from 'react-redux';

const Register = () => {
  const dispatch = useDispatch()
  const [getdeatils,setdetails]= useState({
    email:'',
    password:'',
    confirmpassword:''

  })
const onChangeHandler=(e)=>{
   setdetails({
    ...getdeatils,[e.target.name]:e.target.value
   })
}
const onSubHandler=(e)=>{
  e.preventDefault()
 if(getdeatils.password===getdeatils.confirmpassword){
  dispatch(onRegisterHandler(getdeatils))
  alert("success")
 }
}
  return (
    <div className='conatiner_for_login'>
      <form>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" onChange={onChangeHandler} name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" onChange={onChangeHandler} name='password' placeholder="Password"/>
  </div>
  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control"  onChange={onChangeHandler} name='confirmpassword' placeholder="Confirm Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" onClick={onSubHandler} className="btn btn-primary">SignUp</button>
</form>
    </div>
    

  )
}

export default Register