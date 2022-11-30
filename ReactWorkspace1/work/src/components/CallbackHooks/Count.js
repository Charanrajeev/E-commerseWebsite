import React from 'react'
const Count=(props)=>{
    console.log("Count Component",props.age)
    return (
        
        <div>
            {props.age}
        </div>
    )
}
export default React.memo(Count);