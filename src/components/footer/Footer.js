import classes from "./Footer.module.css"
import { useState,useEffect } from "react"
const FOOTER = {
}

const Footer = (props) => {
    const [footer, setFooter] = useState(FOOTER)
    useEffect(() => {
        if (props.ProfileData && props.ProfileData[0]?.footer) {
            setFooter(props.ProfileData[0].footer);
        } else {
            setFooter(FOOTER);
        }
    }, [props.ProfileData])
    return (
        <>
            <div className={classes.footer}>
                <h2 className={classes.footerTitle}>Abubakar Javed</h2>
                <hr className={classes.boxLine}></hr>
                <ul className={classes.footerNavigation}>
                    <li><a className={classes.footerNavigationItem} href="#aboutHeading">About</a></li>
                    <li><a className={classes.footerNavigationItem} href="#skillsHeading">Skills</a></li>
                    <li><a className={classes.footerNavigationItem} href="#experienceHeading">Experience</a></li>
                    <li><a className={classes.footerNavigationItem} href="#projectsHeading">Projects</a></li>
                    <li><a className={classes.footerNavigationItem} href="#testimonialsHeading">Testimonials</a></li>
                    <li><a className={classes.footerNavigationItem} href="#contactHeading">Contact</a></li>
                </ul>
                <div className={classes.footerLinks}>
                    <a href={footer.githubLink} target="_blank" ><img className={`${classes.githubLinkLogo} ${classes.footerLinkLogo}`} src="github_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={footer.linkedInLink} target="_blank" ><img className={`${classes.linkedInLinkLogo} ${classes.footerLinkLogo}`} src="linkedin_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={footer.facebookLink} target="_blank" ><img className={`${classes.facebookLinkLogo} ${classes.footerLinkLogo}`} src="facebook_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={footer.instagramLink} target="_blank" ><img className={`${classes.instagramLinkLogo} ${classes.footerLinkLogo}`} src="instagram_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={footer.twitterLink} target="_blank" ><img className={`${classes.twitterLinkLogo} ${classes.footerLinkLogo}`} src="twitter_logo.svg" height="35rem" width="35rem"></img></a>
                </div>
                <div className={classes.rightsSection}>
                    <p className={classes.rightsLine}>&#169;Abubakar Javed. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;