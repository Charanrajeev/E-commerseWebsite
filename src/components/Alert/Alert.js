import React,{useState} from 'react'
import { useSelector, } from 'react-redux';
import '../../App.css'
import { useNavigate } from 'react-router-dom';

function Alert() {
    const [getAlert,setAlert] = useState(true);
    const alertstatus = useSelector((state)=>state)
    console.log(alertstatus.login.valid)
    // setTimeout(()=>{
    // setAlert(false)
    // },3000)
    const navigator = useNavigate()
    const onBtnHandlerAlert=()=>{
        setAlert(false)
        navigator('/register')
        
    }
  return (
    <>
       {alertstatus.login.valid && getAlert&& <div className='container-alert'>
        <h5>Alert</h5>
        <h6>You Need To Register First</h6>
        <span>There is no data base Everytime you need to Register</span>
        <button onClick={onBtnHandlerAlert}>Ok</button>
    </div>}
    
    </>
  )
}

export default Alert