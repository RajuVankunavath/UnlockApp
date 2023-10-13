import {useState} from "react"
import { 
    MainContainer,
    CardContainer,
    InputText,
    Heading,
    Para,
    Errormsg
 } from "./styledComponents"; 


 const PasswordValidator=()=>{
    const [password,setPassword]=useState("") 
    const value= password.length
    const errormsg= value<8 ? "Your password must be at least 8 characters" : null
    const onChangePassword=(event)=>{ 

        setPassword(event.target.value)  
        


    }


    return(
        <MainContainer>
            <CardContainer>
                <Heading>Password validator</Heading>
                <Para>chech how strong and secure is your password</Para> 
                <InputText type="password" onChange={onChangePassword}/>
                <Errormsg >{errormsg}</Errormsg>
            </CardContainer>
        </MainContainer>
    )
 }

 export default PasswordValidator