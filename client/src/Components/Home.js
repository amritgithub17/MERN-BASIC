import React, { useEffect } from "react";
import { useState } from 'react';
import { addUser , getUser} from "../service/api";
const initialValue ={
    name : "",
    username: "",
    age: "",
}
const Home = () => {
  const [data, setData] = useState(initialValue);
  const { name, username,  age } = data;
  const [user,setUser] = useState([]);

  const onValueChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const addUserDetails = async() => {
    
    // console.log(data);
    try{
        await addUser(data);
        getUserDetails();
    }
    catch(err)
    {
        console.log(err);
    }
    
  };
  const getUserDetails = async () =>{
    try{
        const response = await getUser();
    console.log(response.data);
    setUser(response.data);
    }
    catch(err)
    {
        console.log(err);
    }
    
  }
  useEffect(()=>{
    getUserDetails();
  },[])
  return (
    <>
      <form>
        <input
          type="text"
          value ={name}
          name="name"
          onChange={(e) => {
            onValueChange(e);
          }}
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="username"
        value ={username}
          onChange={(e) => {
            onValueChange(e);
          }}
          placeholder="Enter Your username"
        />
        <br />
        <br />
        <input
          type="number"
          name ="age"
         value={age}
          onChange={(e) => {
            onValueChange(e);
          }}
          placeholder="Enter Your age"
        />
        <br />
        <br />
        <button type="button" onClick={addUserDetails}>
          Submit
        </button>
      </form>
      <div>
        <h2>User Details:</h2>
        {user.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
