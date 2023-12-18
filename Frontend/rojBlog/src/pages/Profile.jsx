import React from "react";
import ProfileNav from "../components/Loder/profileall/ProfileNav";
import ProfileBlog from "../components/Loder/profileall/ProfileBlog";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profileNav">
          <ProfileNav/>
        </div>
        <div className="profileBlog">
          <ProfileBlog/>
        </div>
      </div>
    </>
  );
};

export default Profile;
