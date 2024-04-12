import React, { useState } from 'react';
import Box from "../UI/Box/Box";
import classes from "./Contact.module.css";
import Button from "../UI/Button/Button"
const Contact = () => {
    const [hoveredBox, setHoveredBox] = useState(null);

    const boxStyle1 = {
        height: "14rem",
        width: "16rem",
        float: "right",
        border: "1px solid rgb(146, 94, 94)",
        transition: "background-color 0.3s",
        textAlign: "center",
        paddingTop: "1rem"
    };

    const boxStyle2 = {
        ...boxStyle1,
        float: "left",
        paddingTop: "1.1rem"
    };
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
    const  contactDetailStyleWhatsapp= {
        fontSize: "small",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white",
    }
    const contactDetailStyle={
        ...contactDetailStyleWhatsapp,
        marginBottom:"0.08rem"
    }
    const handleHover = (boxNumber) => {
        setHoveredBox(boxNumber);
    };

    const handleLeave = () => {
        setHoveredBox(null);
    };
    const openEmail = () => {
        window.location.href = 'mailto:ajaved.bese21seecs@seecs.edu.pk';
    };

    const openWhatsapp = () => {
        window.open('https://wa.me/+923095322507', '_blank');
    };

    return (
        <>
            <h1 className={`text-center title p-5`}>Contact</h1>
            <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <span onMouseEnter={() => handleHover(1)}
                                onMouseLeave={() => handleLeave()}>
                                <Box style={hoveredBox === 1 ? { ...boxStyle1, boxShadow: "0px 0px 40px rgba(186, 10, 10, 0.804)", border: "1px solid white" } : boxStyle1}>
                                    <img className={classes.contactImage} src="email_icon.svg" height="40rem" width="40rem"></img>
                                    <hr className={classes.boxLine}></hr>
                                    <p className={classes.contactTitle} style={hoveredBox === 1 ? { ...contactTitleStyle, color: "white" } : contactTitleStyle}>Email</p>
                                    <p className={classes.contactDetail} style={hoveredBox === 1 ? { ...contactDetailStyle, color: "white" } : contactDetailStyle}>ajaved.bese21seecs@seecs.edu.pk</p>
                                    <Button alt className={classes.contactButton} onClick={openEmail}>Send Email</Button>
                                </Box>
                            </span>
                        </div>
                        <div className="col-6">
                            <span onMouseEnter={() => handleHover(2)}
                                onMouseLeave={() => handleLeave()}>
                                <Box style={hoveredBox === 2 ? { ...boxStyle2, boxShadow: "0px 0px 40px rgba(186, 10, 10, 0.804)", border: "1px solid white" } : boxStyle2}>
                                    <img className={classes.contactImageWhatsapp} src="whatsapp_icon.svg" height="35rem" width="35rem"></img>
                                    <hr className={classes.boxLine}></hr>
                                    <p className={classes.contactTitle} style={hoveredBox === 1 ? { ...contactTitleStyleWhatsapp, color: "white" } : contactTitleStyleWhatsapp}>Whatsapp</p>
                                    <p className={classes.contactDetail} style={hoveredBox === 1 ? { ...contactDetailStyleWhatsapp, color: "white" } : contactDetailStyleWhatsapp}>+92 3095322507</p>
                                    <Button alt className={classes.contactButton} onClick={openWhatsapp}>Send Message</Button>
                                </Box>
                            </span>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Contact;
