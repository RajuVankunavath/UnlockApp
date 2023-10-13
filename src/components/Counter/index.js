import {useState,useEffect} from "react"

const Counter=()=>{
    const [count,setCount]=useState(0) 
    const values= count >= 0 ? count : 0

    useEffect(()=>{
        document.title=`score : ${values}`
    })

     

    const onIncrease =()=>{
        setCount(prevState=>prevState+1)
    }

    const onDecrease=()=>{
        setCount(prevState=>prevState-1)

    }

    return(
        <div>
            <p>{values}</p>
            <button type="button" onClick={onIncrease}>
                increase
            </button>
            <button type="button" onClick={onDecrease}> 
                decrease
            </button>
        </div>
    )
}

export default Counter