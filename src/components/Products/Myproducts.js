import { React, useEffect, useState } from 'react';
import axios from 'axios';
import '../Products/Products.css';
import Cards from './Cards';
import { useDispatch } from 'react-redux';
import {onAddToStoreHandler,onStatus} from '../reducers/storereducer';
import { useSelector } from 'react-redux';
import '../../App.css'


const Myproducts = () => {
    const [getSearch, setSearch] = useState('All');
    const [getList,setList] = useState([])
    const getdata=useSelector((state)=>state.allstore.status)
    const selector = useSelector((state)=>state.allstore.items)
    const dispatch=useDispatch()
    const onChangeHandler=(e)=>{
        setSearch(e.target.value)
    }
    const YOUR_APP_ID = 'b32bf0de'
    const YOUR_APP_KEY = '4d66c8149bf5ddd6017673b8d20259f3'
    useEffect(()=>{
        
        axios.get(`https://api.edamam.com/search?q=${getSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`).then((response)=>{
            // dispatch(onAddToStoreHandler(response.data.hits))
            setList(response.data.hits)
            
            console.log("render")
            
        });
    },[])
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        
        axios.get(`https://api.edamam.com/search?q=${getSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then((response)=>{
           
            setList(response.data.hits)
            
            
        }).catch((error)=>{
            console.log(error)
        })
        
    }
    useEffect(()=>{
        document.title='Products'
      },[])
    
    return (
        <div className='container-myproducts'>
            
                <form className='container-myproducts-form'>
                    <input type="text" className='container-myproducts-input' placeholder="Search" onChange={onChangeHandler} />
                    <button  type="submit" className='container-myproducts-btn' onClick={onSubmitHandler}>Search</button>
                </form>
            
            
                <Cards list={getList}/>
                
            
        </div>
    )
}

export default Myproducts