import jwt from "jsonwebtoken";



export const createCookie = (user , res , massage) => {
  const token = jwt.sign({ _id: user._id }, "FIROJ");
  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 50),
      httpOnly: true,
    })
    .json({
      success:true,
      massage, 
      user,
    });
};
