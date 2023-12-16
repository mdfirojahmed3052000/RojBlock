import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import context from "../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Navber = () => {
  const auth = useContext(context);
  const navigate = useNavigate();
  console.log(auth);
  const logOut = async () => {
    const url = "https://rojblog.onrender.com/api/user/logOut";
    const api = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(api);
    auth.setIsAuth(false);
    toast.success(api.data.massage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/");
    }, "3000");
  };
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
          <div className="navitem" onClick={logOut}>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
