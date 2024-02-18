
import axios from 'axios';
import React, { useState } from 'react'

const FormAxios = () => {
    const[input , setInput] = useState({
        id:"",
        userId:"",
        title:"",
        body:"",

    })
    // const[msg, setMsg] =useState({})   display pani garneyy

    const[posts, setPosts] =useState([]);
    const[submit, setSubmit] = useState(false)
    const handleChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        if(name ==='id'){
            setInput({
                ...input,
                id:value,
                
            })
        }
        else if(name ==='userId'){
            setInput({
               ...input, 
                userId:value,
                
            })

        }
        else if(name ==='title'){
            setInput({
                ...input,
                title:value,
                
            })

        }
        else if(name ==='body'){
            setInput({
                ...input,
                body:value,
                
            })

        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            id:input.id,
            userId:input.userId,
            title: input.title,
            body:input.body,
        })

        .then((response)=>{
         console.log(response)
        setPosts(response.data)

        })
      //   .then((res)=>{
      //    console.log(res)
      //   })
        .catch((error)=>{
          console.log(error)
        })



        setInput({
            id:"",
            userId:"",
            title:"",
            body:"",
        });
    }
  return (
    <div>
    {submit ? <>
    <h1>{posts.id}</h1>
    <h1>{posts.Userid}</h1>
    <h1>{posts.title}</h1>
    <h1>{posts.body}</h1> </> :
    ""

    }
    <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input type="number" name ='id' value= {input.id} onChange={(e)=>handleChange(e,"id")} unique/>
        <br/>
        <label>UserId:</label>
        <input type="number" name ='userId'  value= {input.userId}  onChange={(e)=>handleChange(e,"userId")}/>
        <br/>
        <label>Title:</label>
        <input type="text" name ='title' value= {input.title}  onChange={(e)=>handleChange(e,"title")}/>
        <br/>
        <label>Body:</label>
        <input type="text" name ='body' value= {input.body}  onChange={(e)=>handleChange(e,"body")}/>
        <br/>
        <button>Submit</button>
    </form>
    
    </div>
  )
}

export default FormAxios