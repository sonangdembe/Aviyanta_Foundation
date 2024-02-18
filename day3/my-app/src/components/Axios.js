import React, { useEffect, useState } from "react";
import axios from 'axios';

const AxiosExamples= ()=>{

    const [posts,setPosts] = useState([]);
    const [postFlag, setPostFlag] = useState(false);
    
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')

      .then((response)=>{
       console.log(response.data)
       setPosts(response.data)
       setPostFlag(true)
      })
    //   .then((res)=>{
    //    console.log(res)
    //   })
      .catch((error)=>{
        console.log(error)
      })
},[])


return(  
        <>
        
       {postFlag ? <p>posts</p>:<p>loading.....</p>}
         <div>
            
        <table>
            <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            </tr>

      {posts.map((data, id)=>{
          return(
          <tr key = {id}>
          <td >{data.userId}</td>
          <td > {data.id}</td>
          <td > {data.title}</td>
          <td > {data.body}</td>
          </tr>
      )
    }  
    )}        
    </table>
    
         </div>
        </>
    )


};
export default AxiosExamples;