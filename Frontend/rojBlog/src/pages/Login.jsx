import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email,setname] =useState("");
  const [password,setpassword] =useState("");

  const onSubmit=async (e)=>{
    e.preventDefault();
    console.log( email , password);
    try {
      const url= "https://rojblog.onrender.com/api/user/logIn"
      const api  =  await axios.post(url,{
        email,
        password
      },
      {
        
        headers:{
          
          "Content-Type":"application/json"
        },
        withCredentials:true,
      });
      console.log(api);
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <>
      <div className="formbody">
        <form onSubmit={onSubmit} >
          <h1>LOGIN</h1>

          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>setname(e.target.value)}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
