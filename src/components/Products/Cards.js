import React, { useEffect } from 'react'
import '../Products/Products.css';
import { useState } from 'react';
import { onAddToCartHandler } from '../reducers/cartreducer'
import { useDispatch } from 'react-redux';

const Cards = ({ list }) => {
  const [getadd, setadd] = useState("Add to Cart")
  const [getdata, setdata] = useState([])
  const [getCartList, setCartList] = useState([]);
  const [getLoader,setLoader] = useState(false)
  const dispatch = useDispatch()
useEffect(()=>{
  setLoader(true)
  setInterval(() => {
    setLoader(false)
  }, 5000);
},[])
  const addToCart = (item) => {
    setCartList([...getCartList, item])
    dispatch(onAddToCartHandler(getCartList))
  }
  return (
    <div>
      {!getLoader ? <div className='allCards'>
        {
          list.map((item, index) =>
            <div key={index}>

              <div className="card" >
                <img className="card-img-top" src={item.recipe.image} />
                <div className="card-body">
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">Calories:{Math.round(item.recipe.calories)}</p>
                  <p className="card-text">Price: Rs.{Math.round(item.recipe.totalWeight / 10)}/-</p>
                  <a className="btn btn-primary" onClick={() => addToCart(item)} value={getadd}>{getadd}</a>
                </div>
              </div>
            </div>)}
      </div> :<div>Loading...</div> }
    </div>
  )
}
export default Cards