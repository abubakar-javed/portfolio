import React from "react";
import classes from "./ProfilePic.module.css"
const ProfilePic=()=>{

return(
    <>
    <div className={`${classes.profile_pic_container}`}>
        <img src="prof_pic.png" alt="Loading.." width="100%" height="100%" ></img>
    </div>
    
    </>
)

}

export default ProfilePic;