import React from 'react'

const AddBlog = () => {
  return (
    <>
      <div className="formbody">
      <form action="/api/blog/new" method="POST">
      <h1>CREATE BLOG</h1>
      <input placeholder="Enter Blog Title" type="text" name="title" id="title" />
      <input
        placeholder="Enter Blog Description"
        type="text"
        name="description"
        id="description"
      />
      <input
        placeholder="Enter Blog imgUrl"
        type="text"
        name="imgUrl"
        id="imgUrl"
      />
      <input type="submit" value="Create Blog" />
    </form>
      </div>
    </>
  )
}

export default AddBlog