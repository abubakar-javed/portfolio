import classes from "./Projects.module.css";
import Box from "../UI/Box/Box";
import Button from "../UI/Button/Button";
import { useState,useEffect } from "react";
const PROJECTS = [
    { img: "photogallery.jpeg", title: "PhotoGallery (Microservices)", github_link: "https://github.com/abubakar-javed/Microservices_photoGallery", demo_link: "https://github.com/abubakar-javed" },
    { img: "portfolio.jpg", title: "Portfolio App", github_link: "https://github.com/abubakar-javed/portfolio", demo_link: "https://github.com/abubakar-javed" },
    { img: "photogallery.jpeg", title: "PhotoGallery (Microservices)", github_link: "https://github.com/abubakar-javed/Microservices_photoGallery", demo_link: "https://github.com/abubakar-javed" },
    { img: "portfolio.jpg", title: "Portfolio App", github_link: "https://github.com/abubakar-javed/portfolio", demo_link: "https://github.com/abubakar-javed" },
]
const Projects = (props) => {
    const [projects, setProjects] = useState(PROJECTS);
    useEffect(() => {
        if (props.ProfileData && props.ProfileData[0]?.projects) {
            setProjects(props.ProfileData[0].projects);
        } else {
            setProjects(PROJECTS);
        }
    }, [props.ProfileData])


    const boxStyle1 = { height: "20rem", width: "18rem", textAlign: "center" };
    const imageStyle = { height: "10rem", width: "15rem", marginTop: "1rem", borderRadius: "2rem" }
    const openLink = (link) => {
        window.open(link, "_blank");
    };
    return (
        <>
            <h1 className={`text-center title p-5`} id="projectsHeading">Projects</h1>
            <div className="container">
                <div className="row text-center">
                    {projects.map((element, index) => (
                        <div className="col-4 mb-5" key={index}>
                            <Box style={boxStyle1}>
                                <img src={`${element.img}`} style={imageStyle}></img>
                                <p className={classes.title}>{element.title}</p>
                                <Button alt className={`${classes.ProjectButton}`} onClick={() => openLink(element.github_link)}>Github</Button>
                                <Button alt className={`${classes.ProjectButton}`} onClick={() => openLink(element.demo_link)}>Demo</Button>
                            </Box>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )

}

export default Projects;