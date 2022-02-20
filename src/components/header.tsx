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
            <div className="col">ID
            <div className="col">{user?.id}</div></div>
            <div className="col">Name
            <div className="col">{user?.name}</div></div>
            <div className="col">UserName
            <div className="col">{user?.username}</div></div>
            <div className="col">Email
            <div className="col">{user?.email}</div></div>
            <div className="col">Street
            <div className="col">{user?.address.street}</div></div>
            <div className="col">Suite
            <div className="col">{user?.address.suite}</div></div>
           
          </div>
          <div className="row">
            <div className="col">City
            <div className="col">{user?.address.city}</div></div>
            <div className="col">ZipCode
            <div className="col">{user?.address.zipCode}</div></div>
            <div className="col">Geo Lat
            <div className="col">{user?.address.geo.lat}</div></div>
            <div className="col">Geo Lng
            <div className="col">{user?.address.geo.lng}</div></div>
            <div className="col">Phone
            <div className="col">{user?.phone}</div></div>
            <div className="col">Website
            <div className="col">{user?.website}</div></div>
          </div>
          <div className="row">
          <div className="col">Company Name
            <div className="col">{user?.company.name}</div></div>
            <div className="col">Company CatchPhrase
            <div className="col">{user?.company.catchPhrase}</div></div>
            <div className="col">Company Bs
            <div className="col">{user?.company.bs}</div></div>
          </div>
          <button type="submit" className="btn  btn-dark" onClick={()=>handleChange()}>TODOS</button>
        </div>
      </div>
      );
      }

export default Header;