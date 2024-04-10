import classes from "./Projects.module.css";
import Box from "../UI/Box/Box";
const Elements = [
    {img:"photogallery.jpg",title:"PhotoGallery (Microservices)",github_link:"https://github.com/abubakar-javed/Microservices_photoGallery",demo_link:"https://github.com/abubakar-javed"},
]
const Projects = () => {
    const boxStyle1 = { height: "22rem", width: "18rem", textAlign: "center", paddingTop: "5rem" };
    const imageStyle={height: "10rem", width: "15rem",marginTop:"1rem",borderRadius:"2rem"}
    return (
        <>
            <h1 className={`text-center title`}>Projects</h1>
            <div className="container">
                <div className="row text-center">
                    {Elements.map((element, index) => (
                        <div className="col-4 mb-5" key={index}>
                            <Box style={boxStyle1}>
                            <img src={`${element.img}`} style={imageStyle}></img>
                            <p>{element.title}</p>
                            </Box>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )

}

export default Projects;