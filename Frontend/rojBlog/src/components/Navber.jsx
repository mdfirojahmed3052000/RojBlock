import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const Navber = () => {
  
  return (
    <>
      <div className="Navber">
        <div className="left">
          <Link to={"/"} className="">
            <h2>ROJ BLOG</h2>
          </Link>
        </div>
        <div className="right">
          <Link to={"/register"} className="navitem">
            <h3>Register</h3>
          </Link>
          <Link to={"/addBlog"} className="navitem">
            <h3>AddBlog</h3>
          </Link>
          <Link to={"/profile"} className="navitem">
            <h3>Profile</h3>
          </Link>
          <Link to={"/login"} className="navitem">
            <h3>Login</h3>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Navber;
