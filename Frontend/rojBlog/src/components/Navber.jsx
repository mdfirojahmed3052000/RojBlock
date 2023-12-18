import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const Navber = () => {
  const [searchData, setSearchData] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
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
          <div className="navfrom">
            <form onSubmit={onSubmit}>
              <input
                name="searchData"
                value={searchData}
                placeholder="Search"
                onChange={(e) => setSearchData(e.target.value)}
                type="text"
              />
            </form>
          </div>

          <Link to={"/register"} className="navitem">
            <h3>Register</h3>
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
