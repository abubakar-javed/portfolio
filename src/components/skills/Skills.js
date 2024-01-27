import { useState, useEffect } from "react";
import classes from "./Skills.module.css";
import Skill from "./Skill/Skill";
import Box from "../UI/Box/Box";
const SKILLS = [
  {
    logoSRC: "figma.png",
    name: "Figma",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #f24e1e)",
      detailsColor: "#f24e1e",
      detailsTextShadow: "0px 5px 5px #f24e1e",
      logoPadding:"0.7rem"
    },
  },

  {
    logoSRC: "github.png",
    name: "Github",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #ffffff)",
      detailsColor: "#ffffff",
      detailsTextShadow: "0px 5px 5px #ffffff",
      logoPadding:"0.7rem"
    },
  },

  {
    logoSRC: "php.png",
    name: "PHP",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #777BB3)",
      detailsColor: "#777BB3",
      detailsTextShadow: "0px 5px 5px #777BB3",
      logoPadding:"0.7rem"
    },
  },
  {
    logoSRC: "typescript.png",
    name: "Typescript",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3178c6)",
      detailsColor: "#3178c6",
      detailsTextShadow: "0px 5px 5px #3178c6",
      logoPadding:"0.7rem"
    },
  },

  
  

  {
    logoSRC: "mysql.png",
    name: " MySQL ",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #F29111)",
      detailsColor: "#F29111",
      detailsTextShadow: "0px 5px 5px #F29111",
      logoPadding:"0.7rem"
    },
  },
  {
    logoSRC: "mongodb.png",
    name: "MongoDB",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3FA037)",
      detailsColor: "#3FA037",
      detailsTextShadow: "0px 5px 5px #3FA037",
      logoPadding:"0.5rem"
    },
  },
  {
    logoSRC: "laravel.png",
    name: "Laravel",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #F05340)",
      detailsColor: "#F05340",
      detailsTextShadow: "0px 5px 5px #F05340",
      logoPadding:"0.7rem"
    },
  },
  {
    logoSRC: "node.png",
    name: "Node Js",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #3c873a)",
      detailsColor: "#3c873a",
      detailsTextShadow: "0px 5px 5px #3c873a",
      logoPadding:"0.7rem"
    },
  },
  {
    logoSRC: "angular.png",
    name: "Angular Js",
    experience: "6+ Months",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #dd1b16)",
      detailsColor: "#dd1b16",
      detailsTextShadow: "0px 5px 5px #dd1b16",
      logoPadding:"0.7rem"
    },
  },
  {
    logoSRC: "react.png",
    name: "React Js",
    experience: "1.5+ Years",
    style: {
      logoShadow: "drop-shadow(0px 10px 0.5rem #61DBFB)",
      detailsColor: "#61DBFB",
      detailsTextShadow: "0px 5px 5px #1f9cbb",
      logoPadding:"0.7rem"
    },
  },
];
const Skills = () => {
  return (
    <>
      <h1 className={`text-center title ${classes.title}`}>Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={`${classes.cards} mt-5`}>
              {SKILLS.map((element, key) => (
                <Skill key={key} element={element} style={element.style}/>
              ))}
            </div>
          </div>
          <div className="col-6">
            <Box>here is the bix</Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
