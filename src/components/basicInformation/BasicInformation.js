import React from "react";
import classes from "./BasicInformation.module.css";
import ProfilePic from "./profilePic/ProfilePic";
const BasicInformation = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-6 mt-5">
        <div className={classes.intro}>
          I'm <h3 className={classes.name}>Abubakar Javed</h3>
        </div>
        <p>
          MERN Stack Developer with 1+ years of experience in building and
          maintaining scalable web applications. Proven ability to work
          independently and as part of a team. Problem-solving full-stack
          developer with a strong grip on SQL and non-SQL databases, and a knack
          for learning new technologies.
        </p>
        </div>
        <div className="col-6">
            <ProfilePic/>
        </div>
        </div>
        
        
      </div>
    </>
  );
};

export default BasicInformation;
