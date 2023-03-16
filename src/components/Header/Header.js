import React, { useEffect, useState } from 'react';
import '../../App.css'
import { Link,NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onChangeHeader } from '../reducers/headerreducer';


const Header = () => {
    const getStatus = useSelector((state) => state.header.loginStatus);
    const ls = localStorage.getItem('token')
    const getSize = useSelector((state) => state.cart.items.length+1);
    const dispatch = useDispatch()
    const onLogoutHandler = () => {
        dispatch(onChangeHeader(false))
        localStorage.removeItem('token')
        

    }
  console.log(ls,getStatus);
    return (
        <>
       {getStatus  ? <div className='container-nav'>
             <nav className='navbar'>
                    <ul className='navul'>
                    <li className='navli home'>
                            <NavLink className="nav-btn" to=''><img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516.png'></img></NavLink>
                        </li>
                        <li className='navli home'>
                            <NavLink className="nav-btn name" to=''>Restaurant</NavLink>
                        </li>
                        <li className='navli'>
                            <NavLink className="nav-btn" to=''>Home</NavLink>
                        </li>
                        <li className='navli'>
                            <NavLink className="nav-btn" to='products'>Products</NavLink>
                        </li>
                        <li className='navli'>
                            <NavLink className="nav-btn" to='cart'>Cart-{getSize-1}</NavLink>
                        </li>
                        <li className='navli'>
                        <NavLink className="nav-btn" onClick={onLogoutHandler}>LogOut</NavLink>
                        </li>
                        <li className='navli'>
                            <NavLink className="nav-btn" to='aboutus'>About Us</NavLink>
                        </li>
                        <li className='navli'>
                            <NavLink className="nav-btn" to='help'>Help</NavLink>
                        </li>
                        
                    </ul>
                </nav>
        </div>:
        <div className='container-nav'>
        <nav className='navbar'>
               <ul className='navul'>
               <li className='navli home'>
                       <NavLink className="nav-btn" to=''><img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516.png'></img></NavLink>
                   </li>
                   <li className='navli home'>
                       <NavLink className="nav-btn name" to=''>Restaurant</NavLink>
                   </li>
                   <li className='navli'>
                       <NavLink className="nav-btn" to=''>Home</NavLink>
                   </li>
                   <li className='navli'>
                       <NavLink className="nav-btn" to='products'>Products</NavLink>
                   </li>
                   <li className='navli'>
                       <NavLink className="nav-btn" to='aboutus'>About Us</NavLink>
                   </li>
                   <li className='navli'>
                       <NavLink className="nav-btn" to='login'>Login</NavLink>
                   </li>
                   <li className='navli'>
                       <NavLink className="nav-btn" to='register'>Register</NavLink>
                   </li>
                   <li className='navli'>
                            <NavLink className="nav-btn" to='help'>Help</NavLink>
                        </li>
                   
               </ul>
           </nav>
          
       



   </div>}
   </>
    )
}

export default Header