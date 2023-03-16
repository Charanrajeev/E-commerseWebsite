import {createSlice} from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
const loginSlice= createSlice({
    name:'login',
    initialState:{
        email:'',
        password:'',
        valid:'false'
    },
    reducers:{
        onRegisterHandler:(state,actions)=>{
            state.email=actions.payload.email
            state.password=actions.payload.password
            console.log(state.email,state.password)
           
        },
        onAuthenticate:(state,actions)=>{
            if(actions.payload.email==state.email && actions.payload.password==state.password)
            {
                localStorage.setItem('token',true)
                sessionStorage.setItem('token',true)
                state.valid='true'
               
            }
        }
       
    }
})
export const{onRegisterHandler,onAuthenticate}=loginSlice.actions;
export default loginSlice.reducer