import {createSlice} from '@reduxjs/toolkit';
 const multipleSlice= createSlice({
    name:"multiples",
    initialState:{
        multiple:0
    },
    reducers:{
        incrementer:(state)=>{
        state.multiple+=5
        }
    }
 })
 export const{incrementer}=multipleSlice.actions
 export default multipleSlice.reducer