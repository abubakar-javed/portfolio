import React, { useState, useEffect } from 'react';
import Box from "../UI/Box/Box";
import classes from "./Testimonials.module.css";
import Button from '../UI/Button/Button';

const TESTIMONIALS = [
    { name: "Shela M.", pic: "testimonials/shela.png", comment: "I had a project based on Express Js and React, which also included working on UI design as well. I am very satisfied with Abubakar. He not only timely delivered but the quality of the work was at top. I would really recommend him, for all kinds of project. He has really good working ability and he readily adopted to the docs i shared with him and produced the work which was even better. (Freelancer -2023)" },
    { name: "Warren", pic: "testimonials/warren.jpg", comment: "One of our MERN project was done by Abubakar. His attention to detail and ability to solve problems quickly were impressive. The final product was according to my expectations. Also, his communication was top-notch throughout the process. Highly recommend for any development work! (Freelancer - 2023)" },
    { name: "M. Faizan", pic: "testimonials/faizan.png", comment: "Abubakar worked with us during an internship here at NADRA. He worked on a portal during his internship. He used to work on daily basis and he used to complete his tasks daily. His work quality was really good and not only me but whole of the team here was really impressed with him. We do recommend him for other opportunities as well. (M. Faizan (NADRA) -2023)" },
];

const Testimonials = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState(TESTIMONIALS);
    useEffect(() => {
        if (props.ProfileData && props.ProfileData[0]?.testimonials) {
            setTestimonials(props.ProfileData[0].testimonials);
        } 
    }, [props.ProfileData])


    const [boxStyle, setBoxStyle] = useState({ height: "29rem", width: "27rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"0"});
    useEffect(() => {
        const updateBoxStyle = () => {
          if (window.innerWidth < 400) { 
            setBoxStyle({ height: "33rem", width: "15rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"0"});
          } 
          else if (window.innerWidth < 450){ 
            setBoxStyle({ height: "29rem", width: "18rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"0.2rem"});
          }
          else if (window.innerWidth < 576){ 
            setBoxStyle({ height: "29rem", width: "20rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"0.5rem"});
          }
          else if (window.innerWidth < 768){ 
            setBoxStyle({ height: "29rem", width: "24rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"1.2rem"});
          }
          else{ 
            setBoxStyle({ height: "27rem", width: "27rem", textAlign: "center", overflow: 'hidden', marginLeft: "auto", marginRight: "auto",padding:"2rem"});
          }
        };
    
        updateBoxStyle(); 
        window.addEventListener('resize', updateBoxStyle);
    
        return () => window.removeEventListener('resize', updateBoxStyle);
    
      }, []);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearTimeout(timerId);
    }, [currentIndex, testimonials.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <h1 className={`text-center title pb-5`} id='testimonialsHeading'>Testimonials</h1>
            <div className="container">
                <div className="row text-center">
                    <div className={`col-1 col-md-2 col-xl-3 col-xxl-4 ${classes.center_vertical}`}>
                        <Button className={`${classes.carouselButton} prev`} onClick={handlePrev}>
                            &#8592;
                        </Button></div>
                    <div className={`col-10 col-md-8 col-xl-6 col-xxl-4`}>
                        {testimonials.map((element, index) => (
                            <div
                                key={index}
                                className={`${classes.carousel_item} carousel-item  ${currentIndex === index ? 'active' : ''}`}
                            >
                                <Box style={boxStyle}>
                                    <img className={classes.testPic} src={element.pic}></img>
                                    <h2 className={classes.testName}>{element.name}</h2>
                                    <hr className={classes.boxLine}></hr>
                                    <p className={classes.testComment}>{element.comment}</p>
                                </Box>
                            </div>
                        ))}
                    </div>
                    <div className={`col-1 col-md-2 col-xl-3 col-xxl-4 ${classes.center_vertical}`}>
                        <Button className={`${classes.carouselButton} next`} onClick={handleNext}>
                            &#8594;
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;



