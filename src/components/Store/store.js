import {configureStore} from '@reduxjs/toolkit';
import loginreducer from '../reducers/loginreducer';
import headerreducer from '../reducers/headerreducer';
import cartreducer from '../reducers/cartreducer';
import storereducer from '../reducers/storereducer';
export default configureStore({
    reducer:{
     login:loginreducer,
     header:headerreducer,
     cart:cartreducer,
     allstore:storereducer
    }
})