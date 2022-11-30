import {React,useCallback,useState} from "react";
import Count from "./Count";
import Counter from "./Counter";

const Callback=()=>{
    const [getAge,setAge]=useState(0);
    const [getSalary,setSalary]=useState(0);
    const ageHandler=useCallback(()=>{
        setAge(getAge+1)
    },[getAge])
    const salaryHandler=useCallback(()=>{
        setSalary(getSalary+1)
    },[getSalary])
    return (
        <div>
            <Count age={getAge}/>
            <Counter salary={getSalary}/>
            <button onClick={ageHandler}>AgeChange</button>
            <button onClick={salaryHandler}>SalaryChange</button>
        </div>
    )
}
export default Callback;