import { createSlice } from "@reduxjs/toolkit";
const storeSlice=createSlice({
    name:'store',
    initialState:{
        items:'',
        status:false
    },
    reducers:{
        onAddToStoreHandler:(state,actions)=>{
            // console.log(actions.payload)
            state.items=actions.payload
        console.log("from store",actions.payload)
        },
        onStatus:(state,action)=>{
         state.status=action.payload
        }
        
        
    }
})
export const {onAddToStoreHandler,onStatus} = storeSlice.actions
export default storeSlice.reducer