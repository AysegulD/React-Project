import React,{FC,useEffect} from 'react';
import axios from 'axios';
import {User} from './user';

interface Props {
isHidden: boolean,
onChange: (n: boolean) => void;
}
const Header:FC<Props> = ({onChange, isHidden}) => {

const handleChange = () => {
  onChange(!isHidden);
  }

const [user,setUser] = React.useState<User>();
  useEffect(() => {
    getUser();
    },[])

function getUser(){
    axios.get<User>("https://localhost:44374/User/users")
      .then(response => {
      setUser(response.data)
      })
}
return (
      <div className="App">
        <div className='header'>
          <div className="row">
            <div className="col">{user?.id}</div>
            <div className="col">{user?.name}</div>
            <div className="col">{user?.username}</div>
            <div className="col">{user?.email}</div>
            <div className="col">{user?.address.street}</div>
            <div className="col">{user?.address.suite}</div>
          </div>
          <div className="row">
            <div className="col">{user?.address.city}</div>
            <div className="col">{user?.address.zipCode}</div>
            <div className="col">{user?.address.geo.lat}</div>
            <div className="col">{user?.address.geo.lng}</div>
            <div className="col">{user?.phone}</div>
            <div className="col">{user?.website}</div>
          </div>
          <div className="row">
            <div className="col">{user?.company.name}</div>
            <div className="col">{user?.company.catchPhrase}</div>
            <div className="col">{user?.company.bs}</div>
          </div>
          <button type="submit" className="btn  btn-dark" onClick={()=>handleChange()}>TODOS</button>
        </div>
      </div>
      );
      }

export default Header;