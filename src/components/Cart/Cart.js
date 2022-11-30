import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAddToCartHandler, onPushHandler } from '../reducers/cartreducer'

const Cart = () => {
  const selector = useSelector((state) => state.cart.items);
  const [getPrice, setPrice] = useState(1)
  const dispatch = useDispatch()
  // const onRemoveHandler=(item,id)=>{
  //   // const piece = getList.filter((item)=>item.recipe.calories !==id)
  //   // piece=piece.remove(item)
  //   console.log(piece.splice(index,1))
  //   piece.splice(index,1)
  // }
  useEffect(() => {
    let li = 0
    for (let i = 0; i < selector.length; i++) {
      li = li + Math.round(selector[i].recipe.calories)
    }
    setPrice(Math.round(li / 10))
  }, [selector])
  const onDeleteHandler = (index) => {
    let arr = []
    for (let i = 0; i < selector.length; i++) {
      if (i != index) {
        arr.push(selector[i])
      }
    }
    console.log(arr)
    dispatch(onAddToCartHandler(arr))
  }
  const onBtnChange = (item, index) => {
    console.log(item, index)
    dispatch(onAddToCartHandler([...selector, item]))
  }


  return (
    <div className='allCards'>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Picture</th>
            <th scope="col">item</th>
            <th scope="col">Increase Items</th>

            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            selector ?
              selector.map((item, index) =>
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td><img style={{ width: '30px' }} src={item.recipe.image} /></td>
                  <td>{item.recipe.label}</td>
                  <td><button onClick={() => onBtnChange(item, index + 1)}>+</button></td>
                  <td>{Math.round((item.recipe.calories) / 10)}</td>
                  <td><button onClick={() => onDeleteHandler(index)}>Delete</button></td>

                </tr>
              ) : <h2>Something went wrong</h2>
          }
        </tbody>
        <h5>Total Amount is : Rs. {getPrice}/-</h5>
      </table>
    </div>
  )
}

export default Cart