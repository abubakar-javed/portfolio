import classes from "./Projects.module.css";
import Box from "../UI/Box/Box";
import Button from "../UI/Button/Button";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const PROJECTS = [
    { img: "projects/photogallery.jpeg", title: "PhotoGallery (Microservices)", github_link: "https://github.com/abubakar-javed/Microservices_photoGallery", demo_link: "https://github.com/abubakar-javed" },
    { img: "projects/portfolio.jpg", title: "Portfolio App", github_link: "https://github.com/abubakar-javed/portfolio", demo_link: "https://github.com/abubakar-javed" },
    { img: "projects/coach.jpg", title: "EasyCoach", github_link: "https://github.com/emaanumer/EasyCoach", demo_link: "https://github.com/abubakar-javed" },
    { img: "projects/jinxed.png", title: "Jinxed Sorcerers (Game)", github_link: "https://github.com/Arch-Frost/Jinxed-Sorcerers", demo_link: "https://github.com/abubakar-javed" },
    { img: "projects/adoptease.jpg", title: "Adopt Ease", github_link: "https://github.com/emaanumer012/AdoptEase", demo_link: "https://github.com/abubakar-javed" },
]
const Projects = () => {
    const buttonStyle = { width: "auto", padding: "0.5rem 1.5rem", borderRadius: "10px", fontWeight: "300", fontSize: "medium" ,marginLeft:"0rem"}
    const boxStyle1 = { height: "20rem", width: "18rem", textAlign: "center",marginLeft:"auto",marginRight:"auto",marginBottom:"3rem" };
    const imageStyle = { height: "10rem", width: "15rem", marginTop: "1rem", borderRadius: "2rem" }
    const openLink = (link) => {
        window.open(link, "_blank");
    };
    return (
        <>
            <h1 className={`text-center title p-5`} id="projectsHeading">Projects</h1>
            <div className="container">
                <div className="row text-center">
                    <div className="row d-none d-md-flex">
                        {PROJECTS.map((element, index) => (
                            <div className="col-6 col-md-6 col-lg-4 mb-5 p-0" key={index}>
                                <Box style={boxStyle1}>
                                    <img src={`${element.img}`} style={imageStyle} alt={element.title} />
                                    <p className={classes.title}>{element.title}</p>
                                    <Button alt className={`${classes.ProjectButton}`} styles={buttonStyle} onClick={() => openLink(element.github_link)}>Github</Button>
                                    <Button alt className={`${classes.ProjectButton}`} styles={buttonStyle} onClick={() => openLink(element.demo_link)}>Demo</Button>
                                </Box>
                            </div>
                        ))}
                    </div>
                    <div className={`d-block d-md-none ${classes.carousel_box}`}>
                        <Carousel
                            showArrows={false} infiniteLoop={true}  showThumbs={false} showStatus={false}
                        >
                            {PROJECTS.map((element, index) => (
                                <div key={index}>
                                    <Box style={boxStyle1}>
                                        <img src={`${element.img}`} style={imageStyle} alt={element.title} />
                                        <p className={classes.title}>{element.title}</p>
                                        <Button alt className={`${classes.ProjectButton}`} styles={buttonStyle} onClick={() => openLink(element.github_link)}>Github</Button>
                                        <Button alt className={`${classes.ProjectButton}`} styles={buttonStyle} onClick={() => openLink(element.demo_link)}>Demo</Button>
                                    </Box>
                                </div>
                            ))}
                        </Carousel>
                    </div>


                </div>
            </div>


        </>
    )

}

export default Projects;