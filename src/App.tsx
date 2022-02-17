import React,{FC, useEffect} from 'react';
import axios from 'axios';
import {User} from './components/user';
import {Todos} from './components/todos';
import './App.css';




const App:FC = () => {
  
  const [user,setUser] = React.useState<User>();
  const [todos,setTodos]= React.useState<Todos[]>([]);
  
  useEffect(() => {
    console.log("useEffect")
    getUser();
    getTodos();
  
},[])
  
function  getTodos(){
  axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos/?_page=0&_limit=30")
       .then(response => {
         console.log(response.data)
         setTodos(response.data)
         
        
       })
}
 function  getUser(){
  axios.get<User>("https://localhost:44374/User/users")
       .then(response => {
         console.log(response.data)
         setUser(response.data)
       })
}

  return (
    <div className="App">
      <div className='header'>
        <div>{user?.id}</div> <div>{user?.name}</div> <div>{user?.username}</div>
        <div>{user?.email}</div> <div>{user?.address.street}</div> <div>{user?.address.suite}</div> <div>{user?.address.city}</div> <div>{user?.address.zipCode}</div> <div>{user?.address.geo.lat}</div> <div>{user?.address.geo.lng}</div>
        <div>{user?.phone}</div> <div>{user?.website}</div> <div>{user?.company.name}</div> <div>{user?.company.catchPhrase}</div> <div>{user?.company.bs}</div>
        <button >TODOS</button>
      </div>
      <div>
      <ul className="todos">
          {todos.map((todo,key) => (
            <div>
        
        <p>{todo.title}</p>
        <p>{todo.completed? 'true':'false'}</p>
        </div>
   ))}
  </ul>
        </div>
    </div>
  );
}


export default App;
