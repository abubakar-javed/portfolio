import React from "react";
import classes from "./BasicInformation.module.css";
import ProfilePic from "./profilePic/ProfilePic";
import Button from "../UI/Button/Button";
import { useState,useEffect } from "react";
const DESCRIPTION= `MERN Stack Developer with 1+ years of experience in building and maintaining scalable web applications. Proven ability to work independently and as part of a team. Problem-solving full-stack developer with a strong grip on SQL and non-SQL databases, and a knack for learning new technologies.`
const BasicInformation = (props) => {
  const [description, setDescription] = useState(DESCRIPTION);
  useEffect(()=>{
    if (props.ProfileData && props.ProfileData[0]?.basicInfo?.description) {
      setDescription(props.ProfileData[0].basicInfo.description);
    } else {
      setDescription(DESCRIPTION); 
    }
  },[props.ProfileData])
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 mt-md-5 mt-0 order-2 order-md-1 p-2">
            <div className={classes.intro}>
              I'm <h3 className={classes.name}>Abubakar Javed</h3>
            </div>
            <p className={classes.description}>
            {description}
            </p>
          </div>
          <div className="col-md-6 col-12 order-1 order-md-2">
            <ProfilePic />
            <div className="row mt-4 g-2">
              <div className="col-xl-2 col-lg-1 col-md-1 col-1"></div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-5">
                <Button alt>Download CV</Button>
              </div>
              <div className="col-xl-4 col-5">
                <Button>Let's Talk</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
