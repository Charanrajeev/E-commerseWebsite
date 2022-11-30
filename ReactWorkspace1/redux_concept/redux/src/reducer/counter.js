import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:'counter',//northing depends on it
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
        state.count=state.count+1
        },
        decrement:(state)=>{
        state.count=state.count-1

        }
    }
})
export const{increment,decrement}= counterSlice.actions
export default counterSlice.reducer;