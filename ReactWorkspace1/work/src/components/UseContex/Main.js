//usecontext can be used to pass the data from parent to children it avoid props drilling 
//what is mean bty prop drilling?
//from parent nested children we can pass data in props drilling manner
import React from "react"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
export const useContext = React.createContext()
const Main=()=>{
    return(
        <div>
            <useContext.Provider value='Rajeev'>
                <ComponentB/>
            </useContext.Provider>
            <ComponentA/>
        </div>
    )
}
export default Main