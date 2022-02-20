import React,{FC,useEffect} from "react";
import axios from "axios";
import {Posts} from './posts';

const Post:FC = () =>{
const [posts,setPosts]= React.useState<Posts[]>([]);
  useEffect(() => {
  getPosts();
  },[])

function getPosts(){
  axios.get<Posts[]>("https://jsonplaceholder.typicode.com/posts/?_page=0&_limit=30")
    .then(response => {
    setPosts(response.data)
    })
  }
  const styles = {
    postStyle: {
    maxWidth: '18rem',
    },
    postDiv:{
    margin:'10px'
  },
    } as const;

return(
    <div className="row row-cols-1 row-cols-md-2 g-4" style={styles.postDiv}>
      {posts.map((post,key) => (
      <div className="card text-dark bg-light border-dark  mb-3 col" style={styles.postStyle}>
        <div className="card-header">{post.id}</div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

      ))}
    </div>
    )

    }
export default Post;