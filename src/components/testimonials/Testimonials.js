import React, { useState, useEffect } from 'react';
import Box from "../UI/Box/Box";
import classes from "./Testimonials.module.css";
import Button from '../UI/Button/Button';

const TESTIMONIALS = [
    { name: "Tin Shaw", pic: "test1.jpg", comment: "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with Mohad and his team has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing. I would recommend them to anyone looking for website design or SEO work! (Fiver -2020)" },
    { name: "Shatta Wale", pic: "test2.jpg", comment: "My new website is everything that I wanted.You are much better than other people I have hired so far. What I loved about you was the fact that you started with a plan and executed it. You were also very easy to communicate with and were able to work from concepts rather than needing me to design the website myself. (Upwork -2021)" },
    { name: "Kwame Despite", pic: "test3.jpg", comment: "It has been a pleasure working with you. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone. (Fiver -2021)" },
];

const Testimonials = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState(TESTIMONIALS);
    useEffect(() => {
        if (props.ProfileData && props.ProfileData[0]?.testimonials) {
            setTestimonials(props.ProfileData[0].testimonials);
        } else {
            setTestimonials(TESTIMONIALS);
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



