import express from "express";
import mongoose from "mongoose";
import path from "path";

import userRouters from "./routers/userRouts.js"
import blogRouters from "./routers/blogRouts.js"
import cookieParser from "cookie-parser";

const app = express();
//app.use(express.json());
app.use(express.urlencoded({ extended: true })); // post from data
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file
app.use(cookieParser())
const PORT = 5000;

const url =
  "mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/?retryWrites=true&w=majority";

//MONGOOSE CONNECT
mongoose
  .connect(url, {
    dbName: "ROJBLOG",
  })
  .then(() => {
    console.log("detabase connected");
  })
  .catch((error) => {
    console.log(error());
  });


app.use("/",userRouters);



app.use("/",blogRouters);


/*app.get("/api/user/register" ,(req , res)=>{
    res.json({
        req  
    })
})*/
app.listen(PORT, () => {
  console.log(`open in port ${PORT}`);
});
