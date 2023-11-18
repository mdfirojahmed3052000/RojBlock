import React, { useEffect, useState } from "react";
import HomeBlog from "../components/HomeBlog";
import axios from "axios"
const Home = () => {
  const [allblog , setAllBlog] = useState([]);
  const url="https://rojblog.onrender.com/api/blog/allBlog";

  useEffect(()=>{
    const fatchBlogData=async()=>{
      const BlogData  =  await axios.get(url,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
      });
      
      //console.log(BlogData.data.allblogData);
      setAllBlog(BlogData.data.allblogData);
    }
    
    fatchBlogData();
      
  },[])
  
  console.log(allblog);
  console.log("home");
  

  return (
    <>
      {allblog.map((blog)=>{
        return <HomeBlog data={blog}/>
        
      })}
      
    </>
  );
};

export default Home;
