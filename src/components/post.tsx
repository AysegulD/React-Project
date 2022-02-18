import React,{FC,useEffect} from "react";
import axios from "axios";
import {Posts} from './posts'



const Post:FC = () =>{
   const [posts,setPosts]= React.useState<Posts[]>([]);
   useEffect(() => {
    console.log("useEffect")
    
    getPosts();
  
},[])

function  getPosts(){
    axios.get<Posts[]>("https://jsonplaceholder.typicode.com/posts/?_page=0&_limit=30")
         .then(response => {
           console.log(response.data)
           setPosts(response.data)
          
         })
  }

return(
    <div>
      <ul className="posts">
          {posts.map((post,key) => (
            <div>
        
        <p>{post.title}</p>
        <p>{post.body}</p>
        </div>
   ))}
  </ul>
        </div>
)




}

export default Post;