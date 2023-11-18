import React from "react";

const Login = () => {
  return (
    <>
      <div className="formbody">
        <form action="/api/user/logIn" method="POST">
          <h1>LOGIN</h1>

          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
