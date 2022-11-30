import axios from "axios"
import { useEffect, useState } from "react"

const Main = () => {
    const [getList, setList] = useState([])
    const [getAnswer,setAnswer]=useState([])
    useEffect(() => {
        getInitialDetails()
    }, [])
    useEffect(()=>{
        let list=[]
        if(getList.length){
         for(let obj of getList )
         {
         list.push({
            question:obj.question,
            id:obj.id,
            value:''
         })
         }
         setAnswer(list)
        }
    },[getList])
    useEffect(()=>{
        console.log(getAnswer)
    },[getAnswer])
    const getInitialDetails = async () => {
        try {
            let api = await axios.get('http://localhost:3000/feedbackform')
            // console.log(api.data)
            setList(api.data)

        }
        catch (err) {
            // console.log(err)
        }

    }
    const onClickHandler=(index,data)=>{
        // let list = getAnswer;
        //[{item},{item}]
        // let index=-1;
        // for(let i = 0;i<list.length;i++)
        // {
        //     if(list[i].id==id)
        //     {
        //      index=i;
        //      console.log("i",i)
        //     }
        //     console.log('value',list[0].id,id)
        // }
       
       
        // console.log("listvalue",list[index].value)
        getAnswer[index].value=data
        setAnswer([...getAnswer])
    }
    return (
        <div className="container">
            {
                getList.map((unit, index) => {
                    return (<div key={index}><h3>{unit.question}</h3>
                        {
                            unit.options.map((data, i) => {
                                // console.log(data)
                                return (
                                    <div key={i}>
                                        <input type='radio' onClick={()=>onClickHandler(index,data)} value={data} name={index} />
                                        {data}
                                    </div>
                                )
                            })
                        }</div>)
                })
            }
        </div>
    )
}
export default Main