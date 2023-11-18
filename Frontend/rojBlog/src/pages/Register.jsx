import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [register, setRegister] = useState(initialData);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmits = async (e) => {
    e.preventDefault();
    try {
      const url = "https://rojblog.onrender.com/api/user/register";
      const api = await axios.post(url, register, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(api);
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
    } catch (error) {
      console.warn(error);
      /*toast.error(error.response.data.massage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });*/
    }
    //setRegister(initialData);
  };

  //console.log(register);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="formbody">
        {
          //<form action="/api/user/register" method="POST">
        }
        <form onSubmit={onSubmits}>
          <h1>REGISTER</h1>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            id="name"
            value={register.name}
            onChange={inputEvent}
          />
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={register.email}
            onChange={inputEvent}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            value={register.password}
            onChange={inputEvent}
          />
          {
            //<input type="submit" value="Create Account" onClick={onSubmits} />
          }
          <button onClick={() => onSubmits} type="submit">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;