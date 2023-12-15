import axios from "axios";
import React, { useState } from "react";

const initialData = {
  title: "",
  description: "",
  imgUrl: "",
};
const AddBlog = () => {
  const [blog, setBlog] = useState(initialData);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  const onSubmits = async (e) => {
    e.preventDefault();

    try {
      const url = "https://rojblog.onrender.com/api/blog/new";
      const api = await axios.post(url, blog, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(api);
    } catch (error) {
      console.warn(error);
    }
    console.log(blog);
  };
  return (
    <>
      <div className="formbody">
        <form onSubmit={onSubmits}>
          <h1>CREATE BLOG</h1>
          <input
            placeholder="Enter Blog Title"
            type="text"
            name="title"
            id="title"
            value={blog.title}
            onChange={inputEvent}
          />
          <input
            placeholder="Enter Blog Description"
            type="text"
            name="description"
            id="description"
            value={blog.description}
            onChange={inputEvent}
          />
          <input
            placeholder="Enter Blog imgUrl"
            type="text"
            name="imgUrl"
            id="imgUrl"
            value={blog.imgUrl}
            onChange={inputEvent}
          />
          <button onClick={() => onSubmits} type="submit">
            Create Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
