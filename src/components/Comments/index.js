import {useState} from "react"
import {v4 as uuidv4} from "uuid"

import CommentItem from "../CommentItem"

import {
    CommentsContainer,
    CommentsTitle,
    Form,
    NameInput,
    CommentTextInput,
    CommentButton,
    CommentsList,
  } from './styledComponents'
  
  const Comments = () => {
    const [name,setName]=useState('')
    const [commentText,setCommentText]=useState('')
    const [commentList,setCommentList]=useState([])

    const onChangeValue=(event)=>{
        setName(event.target.value)
    }

    const onChangeComment=(event)=>{
        setCommentText(event.target.value)
    }

    const onSubmitButton=(event)=>{ 
        event.preventDefault()
        const newComment={
            id: uuidv4(),
            name,
            commentText
        }

        setName("") 
        setCommentText("")

        setCommentList(prevCommentList=>[...prevCommentList,newComment])
        
    }

    return(

    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitButton}>
        <NameInput value={name} type="text" placeholder="Your name" onChange={onChangeValue} />
        <CommentTextInput value={commentText} placeholder="Your comment" rows="6" onChange={onChangeComment}/>
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {
            commentList.map(eachList=>(

                <CommentItem commentDetails={eachList} key={eachList.id}/>
            ))
        }
      </CommentsList>
       
    </CommentsContainer>

    )
  }
  
  export default Comments
