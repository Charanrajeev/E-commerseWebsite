import { useEffect, useState } from "react";
import Count from "./Count";
import Reducer from "./Reducer";
const Main = () => {
    const [count, setcount] = useState(0);
    const [getFlag,setFlag] = useState(false)
    // useEffect(() => {///this is similar to compoundDidMount
    //     setcount(5)

    // }, [])
    // useEffect(()=>{
    //     alert("updated")//this is similar to componentDidUpdate
    // })
    // useEffect(()=>{
    //   alert("only count updated call")//it is not there in classcomponent but it works only for specific state
    // },[count])
    const incrementHandler = () => {
        setcount(count + 1)
    }
    const decrementHandler = () => {
        setcount(count - 1)
    }
    const onDisplay=()=>{
        setFlag(!getFlag)
    }
    return (
        <div>
        <div className="container">
            <input type='text' value={count} disabled />
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
           <div>
            <button style={{margin:"10px"}} onClick={onDisplay}>Display List</button>
           </div>
        </div>
        <div className="container">
            {getFlag && <Count/>}
        </div>
        <div>
            <Reducer/>
        </div>

        </div>
    )
}
export default Main;