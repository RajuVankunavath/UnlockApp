import {useState} from "react"
import {
    MainHeading,
    Emage,
    Text,
    ClickButton,


} from "./styledComponents" 


const UnlockApp=()=>{
    const [val,setVal]=useState(true)

    const onClickChangeStatus=()=>{
        setVal(prevState=>!prevState) 
    }

    return(
        <MainHeading>
            <Emage src={val ? "https://assets.ccbp.in/frontend/hooks/lock-img.png" : "https://assets.ccbp.in/frontend/hooks/unlock-img.png"} alt= {val ? "lock" : "unlock"}/>
            <Text>
            Your Device is 
             {val ? " Unlock":" Lock"}
            </Text>
            <ClickButton onClick={onClickChangeStatus} type="button">{
                val ? "Lock" : "Unlock"
            }</ClickButton>
        </MainHeading>
    )
}


export default UnlockApp