import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
const headerSlice = createSlice({
    name: 'login',
    initialState: {
        loginStatus: localStorage.getItem('token')
    },
    reducers: {
        onChangeHeader: (state, actions) => {
            state.loginStatus = actions.payload
        }

    }
})
export const { onChangeHeader } = headerSlice.actions;
export default headerSlice.reducer