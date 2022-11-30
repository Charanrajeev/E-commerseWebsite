import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Product() {
    const nav = useNavigate()
    const [getState,setState]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem('token')=='false')
        {
            nav('/')
            
        }
        if(!localStorage.getItem('token'))
        {
            nav('/login');
            alert('You need Login First')

        }
        if(localStorage.getItem('token')=='true')
        {
            setState(true)
        }
    },[])
    const onLogOut=()=>{
        localStorage.setItem('token',false)
        nav('/login')
    }
   
    function alerted(){
        nav('/')
        alert("needLogin")
    }
  return (
      
    <div>
        {
            getState ?<div> You are SuccesFully Logged<button onClick={onLogOut}>Logout</button></div>: alerted()
        }
        
    </div>
  )
}
