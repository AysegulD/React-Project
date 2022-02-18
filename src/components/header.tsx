import React,{FC,useEffect} from 'react';
import axios from 'axios';
import {User} from './user';
// import Post from './post';
// import ReactDOM from 'react-dom';

interface Props {
  isHidden: boolean,
  onChange: (n: boolean) => void;
}

// function Search(){
//   const [showResults, setShowResults] = React.useState(false)
//   const onClick = () => setShowResults(true)
//   return(
//     <div>
//       <input type="submit" value="Search" onClick={onClick} />
//       { showResults ? <Post /> : null }
     
//     </div>
    
//   )
  
// }
// console.log(showResults)

const Header:FC<Props> = ({onChange, isHidden}) => {

  const handleChange = () => {
    console.log("hello")
    onChange(!isHidden);
  }

const [user,setUser] = React.useState<User>();

  useEffect(() => {
      console.log("useEffect")
      getUser();
      
    
  },[])


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
        <button type="submit" onClick={()=>handleChange()}>TODOS</button>
      </div>
      
    </div>
  );
          }

// ReactDOM.render(
//   <div>
//     <h1>Hello</h1>
//     <Search />
//   </div>,document.getElementById('root')
// )
export default Header;