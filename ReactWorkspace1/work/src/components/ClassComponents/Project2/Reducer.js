import { useReducer } from "react"

const Reducer=()=>{
    const initial=5;
    function reducer(state,action){
     switch(action){
        case 'increment':
        return state+1;
        case 'decrement':
            return state-1;
            default :
            return 0;
     }
    }
    const [count,dispatch]=useReducer(reducer,initial)
    return(
        <div>
             <div className="container">
            <input type='text' value={count} disabled />
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
           </div>
        </div>
    )
}
export default Reducer