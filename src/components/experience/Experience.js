import classes from "./Experience.module.css"
import Box from "../UI/Box/Box"
import { useState,useEffect } from "react"
const LanguagesAndDBs = [
    { title1: "Javascript", level1: "Experienced",title2: "Typescript", level2: "Intermediate"  },
    { title1: "Html", level1: "Experienced",title2: "CSS", level2: "Experienced" },
    { title1: "Python", level1: "Intermediate",title2: "Java", level2: "Basic" },
    { title1: "MySql", level1: "Experienced",title2: "MongoDB", level2: "Experienced" },
]
const Frameworks = [
    { title: "React Js", level: "Experienced" },
    { title: "Node Js", level: "Experienced" },
    { title: "Angular Js", level: "Intermediate" },
    { title: "Bootstrap", level: "Experienced" },
]
const Tools = [
    { title: "Github", level: "Experienced" },
    { title: "Figma", level: "Experienced" },
    { title: "AutoCAD", level: "Basic" },
    { title: "Jira", level: "Intermediate" },
]
const Experience = (props) => {
    const [langDB, setLangDB] = useState(LanguagesAndDBs);
    const [frameworks, setFrameworks] = useState(Frameworks);
    const [tools, setTools] = useState(Tools);
    useEffect(()=>{
      if (props.ProfileData && props.ProfileData[0]?.experience?.languagesAndDbs) {
        setLangDB(props.ProfileData[0].experience.languagesAndDbs);
        setFrameworks(props.ProfileData[0].experience.frameworks);
        setTools(props.ProfileData[0].experience.tools);
      } else {
        setLangDB(LanguagesAndDBs); 
        setFrameworks(Frameworks); 
        setTools(Tools); 
      }
    },[props.ProfileData])




    const boxStyle1 = { height: "23rem", width: "16rem"};
    const boxStyle2 = { height: "23rem", width: "35rem"};
    const box1Content = (
        <span>
            <div className={`${classes.boxTitle}`}>Frameworks</div>
            <hr className={classes.boxLine}></hr>
            {frameworks.map((element, index) => (
                <span className={classes.expElement} key={index}>
                    <div className="row">
                        <div className="col-3 mt-1">
                            <img src="check.svg" height="20rem" width="20rem" className={classes.boxIcon}></img>
                        </div>
                        <div className="col-7">
                            <span className={classes.ExpTitle}>{element.title}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                        </div>
                        <div className="col-7">
                            <span className={classes.ExpLevel}>{element.level}</span>
                        </div>
                    </div>
                </span>
            ))}
        </span>
    )
    const box2Content = (
        <span>
            <div className={`${classes.boxTitle}`}>Languages and DBs</div>
            <hr className={classes.boxLine}></hr>
            {langDB.map((element, index) => (
                <span className={classes.expElement} key={index}>
                    <div className="row">
                        <div className="col-2 mt-1">
                            <img src="check.svg" height="20rem" width="20rem" className={classes.boxIcon}></img>
                        </div>
                        <div className="col-3">
                            <span className={classes.ExpTitle}>{element.title1}</span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2 mt-1">
                            <img src="check.svg" height="20rem" width="20rem" className={classes.boxIcon}></img>
                        </div>
                        <div className="col-3">
                            <span className={classes.ExpTitle}>{element.title2}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                        </div>
                        <div className="col-3">
                            <span className={classes.ExpLevel}>{element.level1}</span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                        </div>
                        <div className="col-3">
                            <span className={classes.ExpLevel}>{element.level2}</span>
                        </div>
                    </div>
                </span>
            ))}
        </span>

    )
    const box3Content = (
        <span>
            <div className={`${classes.boxTitle}`}>Tools</div>
            <hr className={classes.boxLine}></hr>
            {tools.map((element, index) => (
                <span className={classes.expElement} key={index}>
                    <div className="row">
                        <div className="col-3 mt-1">
                            <img src="check.svg" height="20rem" width="20rem" className={classes.boxIcon}></img>
                        </div>
                        <div className="col-7">
                            <span className={classes.ExpTitle}>{element.title}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                        </div>
                        <div className="col-7">
                            <span className={classes.ExpLevel}>{element.level}</span>
                        </div>
                    </div>
                </span>
            ))}
        </span>
    )
    return (
        <>
            <h1 className="text-center p-5" id="experienceHeading">Experience</h1>
            <div className="p-5">
                <div className="row text-center">
                    <div className="col-3">
                        <Box style={boxStyle1}>
                        {box1Content}
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box style={boxStyle2}>
                        {box2Content}
                        </Box>
                    </div>
                    <div className="col-3">
                        <Box style={boxStyle1}>
                        {box3Content}
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Experience;