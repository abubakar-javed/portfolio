import React from "react";
import classes from "./BasicInformation.module.css";
import ProfilePic from "./profilePic/ProfilePic";
import Button from "../UI/Button/Button";
import { useState, useEffect } from "react";
const DESCRIPTION = `A Software Engineer having 1.5+ years of Experience in MERN Stack, 6 months in MEAN stack and about 4 months in Machine Learning (python). I have Proven ability to work independently as well as part of a team. Having Strong grip on SQL and non-SQL databases, experience in UI design (Figma) and a knack for learning new technologies makes me stand out from others.`
const RESUME_LINK=`https://abubakar-resume.tiiny.site`
const BasicInformation = (props) => {
  const [description, setDescription] = useState(DESCRIPTION);
  const [resumeLink, setResumeLink] = useState(RESUME_LINK);
  useEffect(() => {
    if (props.ProfileData && props.ProfileData[0]?.basicInfo?.description) {
      setDescription(props.ProfileData[0].basicInfo.description);
      setResumeLink(props.ProfileData[0].basicInfo.resumeLink);
    }
  }, [props.ProfileData])
  const openLink = (link) => {
    console.log(link)
    window.open(link, "_blank");
};
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
                  <Button alt onClick={() => openLink(resumeLink)}>
                    Download CV
                  </Button>
              </div>
              <div className="col-xl-4 col-5">
                <a href="#contactHeading">
                <Button>Let's Talk</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
