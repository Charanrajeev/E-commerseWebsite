import React, { useEffect } from 'react'
import { useState } from 'react';
import { onAddToCartHandler } from '../reducers/cartreducer'
import { useDispatch } from 'react-redux';
import '../../App.css';

const Cards = ({ list }) => {
  const [getadd, setadd] = useState("Add to Cart")
  const [getdata, setdata] = useState([])
  const [getCartList, setCartList] = useState('');
  const [getLoader,setLoader] = useState(false)
  const dispatch = useDispatch()
useEffect(()=>{
  setLoader(true)
  setInterval(() => {
    setLoader(false)
  }, 5000);
},[])
  const addToCart = (item) => {
    console.log('item',item)
    // if(!getCartList){
    //  set
    // }
    setCartList([...getCartList, item])
    
    dispatch(onAddToCartHandler(getCartList))
    // console.log([...getCartList,item]);
  }
  return (
    <div className='container-cards'>
      {!getLoader ? <div className='container-cards-main'>
        {
          list.map((item, index) =>
            <div key={index} className='container-cards-main-main'>

              <div className="card" style={{width:'18rem'}} >
                <img className="card-img-top" src={item.recipe.image} />
                <div className="card-body">
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-price">Calories:{Math.round(item.recipe.calories)}</p>
                  <p className="card-price">Price: Rs.{Math.round(item.recipe.totalWeight / 10)}/-</p>
                  <a className="btn btn-primary" onClick={() => addToCart(item)} value={getadd}>{getadd}</a>
                </div>
              </div>
            </div>)}
      </div> :<div className='loading-bar'>
      <div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
      </div> }
    </div>
  )
}
export default Cards