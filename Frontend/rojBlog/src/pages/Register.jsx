import React from "react";

const Register = () => {
  return (
    <>
      <div className="formbody">
        <form action="/api/user/register" method="POST">
          <h1>REGISTER</h1>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            id="name"
          />
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
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </>
  );
};

export default Register;
