import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:''
    },
    reducers:{
        onAddToCartHandler:(state,actions)=>{
            // console.log(actions.payload)
            state.items=actions.payload
        // console.log("from red",actions.payload)
        }
        
        
    }
})
export const { onPushHandler,onAddToCartHandler} = cartSlice.actions
export default cartSlice.reducer