import axios from "axios";
import React,{FC,useEffect} from "react";
import{Todos} from './todos';




const Todo:FC =() =>{
    const [todos,setTodos] = React.useState<Todos[]>([]);
   
    useEffect(() => {
        console.log("useEffect")
        getTodos();
        
      
    },[])  
function getTodos(){
    axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
        setTodos(response.data)
    })
    
}
return(
    <div>
        {todos.map((todo,key) =>(
            <div>
            <h1>{todo.title}</h1>
            <p>{todo.completed ? 'true' : 'false'}</p>
            </div>
        ))}
       
    </div>
)
}


export default Todo;