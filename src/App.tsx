import React,{FC, useState} from 'react';
import Header from './components/header';
import Post from './components/post';

import './App.css';
import Todo from './components/todo';




const App:FC = () => {

  const [isHidden, setIsHidden] = useState(false);
  const handleHiddenOnChange = (remove:boolean):void => {
    console.log('remove: ' + remove)
    setIsHidden(remove)
  };

  return (
    <div className="App">
      <Header onChange={handleHiddenOnChange} isHidden={isHidden}/>
      {isHidden? <Todo /> : <Post/>}
 
    </div>
  );
}


export default App;
