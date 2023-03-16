import React,{useEffect} from 'react';
import '../../App.css';

function Help() {
  useEffect(()=>{
    document.title='Help'
  },[])
  return (
    <div className='container-help'>
        <h1 >Here Some Tips To Use Application</h1>
        <div className='container-help-types'>
          <div className='container-help-types-help'>
            <h5>First Step</h5>
            <h6>Please First Register</h6>
            <button>Register</button>
          </div>
          <div className='container-help-types-help'>
            <h5>Second Step</h5>
            <h6>Use Same credentials to login</h6>
            <button>Login</button>
          </div>
          <div className='container-help-types-help'>
            <h5>Third Step</h5>
            <h6>You will redirected to products page</h6>
            <button>Products</button>
          </div>
          <div className='container-help-types-help'>
            <h5>Fourth Step</h5>
            <h6>Add Products to cart </h6>
            <button>Cart</button>
          </div>

        </div>
    </div>
  )
}

export default Help