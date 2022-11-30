import { useEffect } from "react";

const Count=()=>{
   
    useEffect(()=>{//this is similar to componentDidUnmount
        const time =setInterval(()=>{
            console.log('calling...');
        },2000)
        return ()=>clearInterval(time)
    })
    return(
        <div>
            <ul>
                <li>Pen</li>
                <li>Pencil</li>
                <li>Duster</li>
            </ul>
        </div>
    )
}
export default Count;