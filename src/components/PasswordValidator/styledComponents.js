import styled from "styled-components";

export const MainContainer=styled.div`
background-color:#24263c;
background-size:cover;
height:100vh;
display:flex;
flex-direction:column;
align-items:center; 
justify-content:center;
`

export const CardContainer=styled.div`
background-color:#475569; 
height:400px;
width:600px;
border-radius:6px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and(min-width:768px){
    width:700px;
    height:500px;
}
`


export const Heading=styled.h1`
font-family:"Roboto";
font-size:20px;
font-weight:bold;
color:#ffffff; 
`

export const Para= styled.p`
font-family:"Roboto";
font-size:16px;
font-weight:500; 
color: #f8fafc;

`


export const InputText= styled.input`
border:none;
background-color:#edeeff;
border-radius:2px;
height:30px;
width:200px;
outline:none;


`

export const Errormsg = styled.p`
color:#ef4444;
`