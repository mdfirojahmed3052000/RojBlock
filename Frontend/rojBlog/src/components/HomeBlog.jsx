import React from "react";

const HomeBlog = ({data}) => {
    console.log(data)
  return (
    <>
      <div className="homeBlog">
        <h1 className="blogTitle">{data.title}</h1>
        <div className="blogAddOn">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/user.png"
            alt="user"
          />
          <h3 className="blogAddOntext">Md Firoj Ahmed</h3>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/metro/26/new-post.png"
            alt="new-post"
          />
          <h3 className="blogAddOntext">mdfirojahmed@gmail.com</h3>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
            alt="calendar--v1"
          />
          <h3 className="blogAddOntext">{data.createAt.substring(0,10)}</h3>
        </div>
        <div className="blogDetails">
          <img
            className="blogDetailsImage"
            src={data.imgUrl}
            alt="blog image"
          />
          <p className="blogDescription">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
