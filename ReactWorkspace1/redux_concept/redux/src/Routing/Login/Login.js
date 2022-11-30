import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const [getForm,setForm]= useState({
        email:'',
        password:''

    })
    const navi = useNavigate()
    const onSubmitHandler=(e)=>{
        e.preventDefault()

        if(getForm.email=='charan@gmail.com'&& getForm.password=='12345')
        {
        sessionStorage.setItem('token',true)
        localStorage.setItem('token',true)
        navi('/product')
        }
    }
    const onChangeHandler=(e)=>{
     setForm({
        ...getForm,
        [e.target.name]:e.target.value

     })
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" name='email' placeholder="Enter email" onChange={onChangeHandler}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' placeholder="Password" onChange={onChangeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}
