import classes from "./Experience.module.css"
import Box from "../UI/Box/Box"
import { useState,useEffect } from "react"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const LanguagesAndDBs = [
    { title1: "Javascript", level1: "Experienced",title2: "Typescript", level2: "Intermediate"  },
    { title1: "Html", level1: "Experienced",title2: "CSS", level2: "Experienced" },
    { title1: "Python", level1: "Intermediate",title2: "Java", level2: "Basic" },
    { title1: "MySql", level1: "Experienced",title2: "MongoDB", level2: "Experienced" },
]
const LanguagesAndDBs_p1=[
    { title: "Javascript", level: "Experienced" },
    { title: "Typescript", level: "Intermediate" },
    { title: "Html", level: "Experienced" },
    { title: "CSS", level: "Experienced" }
]
const LanguagesAndDBs_p2=[
    { title: "Python", level: "Intermediate" },
    { title: "Java", level: "Basic" },
    { title: "MySql", level: "Experienced" },
    { title: "MongoDB", level: "Experienced" }
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


    const [boxStyle1, setBoxStyle1] = useState({ height: "25rem", width: "16rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
    const [boxStyle2, setBoxStyle2] = useState({ height: "23rem", width: "35rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});


    useEffect(() => {
        const updateBoxStyle = () => {
          if (window.innerWidth < 768) { 
            setBoxStyle1({ height: "25rem", width: "16rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
          } 
          else if (window.innerWidth < 992) { 
            setBoxStyle1({ height: "23rem", width: "16rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
          }
          else if (window.innerWidth < 1100){
            setBoxStyle1({ height: "23rem", width: "14rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
            setBoxStyle2({ height: "23rem", width: "32rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
          } 
          else if (window.innerWidth < 1400){
            setBoxStyle1({ height: "23rem", width: "16rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
            setBoxStyle2({ height: "23rem", width: "35rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});  
          }
          else{
            setBoxStyle1({ height: "23rem", width: "14rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});
            setBoxStyle2({ height: "23rem", width: "33rem",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem"});  
          }
        };
    
        updateBoxStyle(); 
        window.addEventListener('resize', updateBoxStyle);
    
        return () => window.removeEventListener('resize', updateBoxStyle);
    
      }, []);

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
    const box2Content_p1 = (
        <span>
            <div className={`${classes.boxTitle}`}>Languages</div>
            <hr className={classes.boxLine}></hr>
            {LanguagesAndDBs_p1.map((element, index) => (
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
    const box2Content_p2 = (
        <span>
            <div className={`${classes.boxTitle}`}>Languages and DBs</div>
            <hr className={classes.boxLine}></hr>
            {LanguagesAndDBs_p2.map((element, index) => (
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
            <div className="d-none d-md-block">
                <div className="row text-center">
                    <div className="col-md-1 d-lg-none d-xxl-block col-xxl-1"></div>
                    <div className={`col-12 col-md-5 col-lg-3 col-xxl-2 order-lg-1 order-md-1  ${classes.box_num_1}`}>
                        <Box style={boxStyle1}>
                            {box1Content}
                        </Box>
                    </div>
                    <div className={`col-12 col-md-12 col-lg-6 col-xxl-6 order-lg-2 order-md-3  ${classes.box_num_2}`}>
                        <Box style={boxStyle2}>
                            {box2Content}
                        </Box>
                    </div>
                    <div className={`col-12 col-md-5 col-lg-3 col-xxl-2 order-lg-3 order-md-2 ${classes.box_num_3}`}>
                        <Box style={boxStyle1}>
                            {box3Content}
                        </Box>
                    </div>
                    <div className="d-none d-xxl-block col-xxl-1 order-4"></div>
                </div>
            </div>
            <div className="d-block d-md-none">
                <Carousel showArrows={false} showThumbs={true} infiniteLoop={true} showStatus={false}>
                    <div>
                        <Box style={boxStyle1}>
                            {box1Content}
                        </Box>
                    </div>
                    <div>
                        <Box style={boxStyle1}>
                            {box2Content_p1}
                        </Box>
                    </div>
                    <div>
                        <Box style={boxStyle1}>
                            {box2Content_p2}
                        </Box>
                    </div>
                    <div>
                        <Box style={boxStyle1}>
                            {box3Content}
                        </Box>
                    </div>
                </Carousel>
            </div>
        </>
    )


}

export default Experience;