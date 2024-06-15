import React, { useState, useEffect } from 'react';
import Box from "../UI/Box/Box";
import classes from "./Contact.module.css";
import Button from "../UI/Button/Button"
const CONTACT = {
    "email": "ajaved.bese21seecs@seecs.edu.pk",
    "whatsapp": "+923095322507"
}
const Contact = (props) => {
    const [hoveredBox, setHoveredBox] = useState(null);
    const [contact, setContact] = useState(CONTACT)
    useEffect(() => {
        if (props.ProfileData && props.ProfileData[0]?.contact) {
            setContact(props.ProfileData[0].contact);
        } else {
            setContact(CONTACT);
        }
    }, [props.ProfileData])
    const buttonStyle = { width: "11rem", padding: "0.5rem 1.5rem", borderRadius: "10px", fontWeight: "300", fontSize: "medium",marginLeft:"0" }
    const [boxStyle1, setBoxStyle1] = useState({height: "14rem",width: "16rem",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1rem",marginLeft:"auto",marginRight:"auto",marginBottom:"2rem"});
    const [boxStyle2, setBoxStyle2] = useState({height: "14rem",width: "16rem",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1.1rem",marginLeft:"auto",marginRight:"auto"});
    useEffect(() => {
        const updateBoxStyle = () => {
          if (window.innerWidth < 768) { 
            setBoxStyle1({height: "14rem",width: "16rem",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1rem",marginLeft:"auto",marginRight:"auto",marginBottom:"2rem"});
            setBoxStyle2({height: "14rem",width: "16rem",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1.1rem",marginLeft:"auto",marginRight:"auto"});
          } 
          else{ 
            setBoxStyle1({height: "14rem",width: "16rem",float: "right",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1rem"});
            setBoxStyle2({height: "14rem",width: "16rem",float: "left",border: "1px solid rgb(146, 94, 94)",transition: "background-color 0.3s",textAlign: "center",paddingTop: "1.1rem"});
         }
        };
    
        updateBoxStyle(); 
        window.addEventListener('resize', updateBoxStyle);
    
        return () => window.removeEventListener('resize', updateBoxStyle);
    
      }, []);
    const contactTitleStyle = {
        fontSize: "larger",
        fontWeight: "700",
        marginTop: "0.3rem",
        marginBottom: "0.3rem",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white",
    }
    const contactTitleStyleWhatsapp = {
        ...contactTitleStyle,
        marginTop: "1.2rem",
        marginBottom: "0.2rem",
    }
    const contactDetailStyleWhatsapp = {
        fontSize: "small",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#b8b7b6",
    }
    const contactDetailStyle = {
        ...contactDetailStyleWhatsapp,
        marginBottom: "0.08rem"
    }
    const handleHover = (boxNumber) => {
        setHoveredBox(boxNumber);
    };

    const handleLeave = () => {
        setHoveredBox(null);
    };
    const openEmail = () => {
        window.location.href = `mailto:${contact.email}`;
    };

    const openWhatsapp = () => {
        console.log(`https://wa.me/${contact.whatsapp}`)
        window.open(`https://wa.me/${contact.whatsapp}`, '_blank');
    };

    return (
        <>
            <h1 className={`text-center title p-5`} id='contactHeading'>Contact</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <span onMouseEnter={() => handleHover(1)}
                            onMouseLeave={() => handleLeave()}>
                            <Box style={hoveredBox === 1 ? { ...boxStyle1, boxShadow: "0px 0px 40px rgba(186, 10, 10, 0.804)", border: "1px solid white" } : boxStyle1}>
                                <img className={classes.contactImage} src="email_icon.svg" height="40rem" width="40rem"></img>
                                <hr className={classes.boxLine}></hr>
                                <p className={classes.contactTitle} style={contactTitleStyle}>Email</p>
                                <p className={classes.contactDetail} style={contactDetailStyle}>{contact.email}</p>
                                <Button alt className={classes.contactButton} styles={buttonStyle} onClick={openEmail}>Send Email</Button>
                            </Box>
                        </span>
                    </div>
                    <div className="col-12 col-md-6">
                        <span onMouseEnter={() => handleHover(2)}
                            onMouseLeave={() => handleLeave()}>
                            <Box style={hoveredBox === 2 ? { ...boxStyle2, boxShadow: "0px 0px 40px rgba(186, 10, 10, 0.804)", border: "1px solid white" } : boxStyle2}>
                                <img className={classes.contactImageWhatsapp} src="whatsapp_icon.svg" height="35rem" width="35rem"></img>
                                <hr className={classes.boxLine}></hr>
                                <p className={classes.contactTitle} style={contactTitleStyleWhatsapp}>Whatsapp</p>
                                <p className={classes.contactDetail} style={contactDetailStyleWhatsapp}>{contact.whatsapp}</p>
                                <Button alt className={classes.contactButton} styles={buttonStyle} onClick={openWhatsapp}>Send Message</Button>
                            </Box>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
