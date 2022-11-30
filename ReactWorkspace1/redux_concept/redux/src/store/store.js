import {configureStore} from '@reduxjs/toolkit';
//configureStore is pre defined keyword
import counter from '../reducer/counter'
import multiples from '../reducer/multiples';
export default configureStore({
    reducer:{//reducer is pre defined keyword
        //counter is user defined
        //value can be depend on reducer
        counterValue:counter,
        multipleValue:multiples
        
    }
})