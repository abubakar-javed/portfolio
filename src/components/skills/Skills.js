import { useState, useEffect } from "react";
import classes from "./Skills.module.css";
import Skill from "./Skill/Skill";
import Box from "../UI/Box/Box";
const SKILLS = [
  {
    logoSRC: "skills/figma.png",
    name: "Figma",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #f24e1e)",
      detailsColor: "#f24e1e",
      detailsTextShadow: "0px 5px 5px #f24e1e",
      logoPadding: "0.7rem"
    },
  },

  {
    logoSRC: "skills/github.png",
    name: "Github",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #ffffff)",
      detailsColor: "#ffffff",
      detailsTextShadow: "0px 5px 5px #ffffff",
      logoPadding: "0.7rem"
    },
  },

  {
    logoSRC: "skills/python.png",
    name: "Python",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #FFDE57)",
      detailsColor: "#FFDE57",
      detailsTextShadow: "0px 5px 5px #FFDE57",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/typescript.png",
    name: "Typescript",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3178c6)",
      detailsColor: "#3178c6",
      detailsTextShadow: "0px 5px 5px #3178c6",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/mysql.png",
    name: " MySQL ",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #F29111)",
      detailsColor: "#F29111",
      detailsTextShadow: "0px 5px 5px #F29111",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/mongodb.png",
    name: "MongoDB",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3FA037)",
      detailsColor: "#3FA037",
      detailsTextShadow: "0px 5px 5px #3FA037",
      logoPadding: "0.5rem"
    },
  },
  {
    logoSRC: "skills/laravel.png",
    name: "Laravel",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #F05340)",
      detailsColor: "#F05340",
      detailsTextShadow: "0px 5px 5px #F05340",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/node.png",
    name: "Node Js",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3c873a)",
      detailsColor: "#3c873a",
      detailsTextShadow: "0px 5px 5px #3c873a",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/angular.png",
    name: "Angular Js",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #dd1b16)",
      detailsColor: "#dd1b16",
      detailsTextShadow: "0px 5px 5px #dd1b16",
      logoPadding: "0.7rem"
    },
  },
  {
    logoSRC: "skills/react.png",
    name: "React Js",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #61DBFB)",
      detailsColor: "#61DBFB",
      detailsTextShadow: "0px 5px 5px #1f9cbb",
      logoPadding: "0.7rem"
    },
  },
];
const Skills = () => {
  const [boxStyle, setBoxStyle] = useState({  height: "8rem", width: "6.5rem", textAlign: "center" });

  useEffect(() => {
    const updateBoxStyle = () => {
      if (window.innerWidth < 330) { 
        setBoxStyle({  height: "9rem", width: "6.5rem", textAlign: "center" });
      } 
      else if (window.innerWidth < 400) { 
        setBoxStyle({  height: "9rem", width: "7rem", textAlign: "center" });
      } 
      else if (window.innerWidth <480) { 
        setBoxStyle({  height: "9rem", width: "7rem", textAlign: "center" });
      }
      else if (window.innerWidth >480) { 
        setBoxStyle({  height: "10rem", width: "8rem", textAlign: "center" });
      }  
    };

    updateBoxStyle(); 
    window.addEventListener('resize', updateBoxStyle);

    return () => window.removeEventListener('resize', updateBoxStyle);

  }, []);


  

  return (
    <>
      <h1 className={`text-center title ${classes.title} p-4 p-md-5 pb-0`} id="skillsHeading">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 col-xl-5 mb-5 mb-md-0">
            <div className={`${classes.cards} mt-5`}>
              {SKILLS.skillsDetails ? SKILLS.skillsDetails.map((element, key) => (
                <Skill key={key} element={element} style={element.style} />
              )) : SKILLS.map((element, key) => (
                <Skill key={key} element={element} style={element.style} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-2"></div>
          <div className="col-md-5  col-lg-5 col-12 col-xl-5 mt-5 mt-md-0">
            <div className="row">
              <div className="col-1 col-md-1 col-lg-1"></div>
              <div className={`col-5 col-md-6 col-lg-5 ${classes.box_container}`}>
                <Box style={boxStyle}>
                  <img src="skills/experience.svg" height="50rem" width="30rem" className={classes.boxIcon}></img>
                  <span className={classes.boxTitle}>Experience</span>
                  <hr className={classes.boxLine}></hr>
                  <span className={classes.boxDesc}>{SKILLS.experience ? SKILLS.experience : "2+"} Years</span>
                </Box>
              </div>
              <div className="col-4 col-md-5 col-lg-4">
                <Box style={boxStyle}>
                  <img src="skills/projects.svg" height="50rem" width="30rem" className={classes.boxIcon}></img>
                  <span className={classes.boxTitle2}>Projects</span>
                  <hr className={classes.boxLine}></hr>
                  <span className={classes.boxDesc2}>{SKILLS.projects ? SKILLS.projects : "20+"} Projects</span>
                </Box>
              </div>


            </div>
            <div className="row ml-md-3" style={{ marginTop: "2rem" }}>
              {SKILLS.description ? SKILLS.description : "Looking to digitize your business? Here i am! and you're at the right place. Having experiences on both frontend and backend technologies, I can help you achieve your goals in best possible way. Ready to discuss? Head to the contact section below!!"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
