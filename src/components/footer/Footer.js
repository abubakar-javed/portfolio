import classes from "./Footer.module.css"
const FOOTER = {
    githubLink: "https://github.com/abubakar-javed",
    linkedInLink: "https://www.linkedin.com/in/abubakar-javed-a05676236/",
    facebookLink: "https://www.facebook.com/abubakar.qureshi.338/",
    instagramLink: "https://www.instagram.com/abubakar_.jani/",
    twitterLink: "https://twitter.com/jani_vocals"
}

const Footer = () => {
    
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
                    <a href={FOOTER.githubLink} target="_blank" ><img className={`${classes.githubLinkLogo} ${classes.footerLinkLogo}`} src="footer/github_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={FOOTER.linkedInLink} target="_blank" ><img className={`${classes.linkedInLinkLogo} ${classes.footerLinkLogo}`} src="footer/linkedin_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={FOOTER.facebookLink} target="_blank" ><img className={`${classes.facebookLinkLogo} ${classes.footerLinkLogo}`} src="footer/facebook_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={FOOTER.instagramLink} target="_blank" ><img className={`${classes.instagramLinkLogo} ${classes.footerLinkLogo}`} src="footer/instagram_logo.svg" height="35rem" width="35rem"></img></a>
                    <a href={FOOTER.twitterLink} target="_blank" ><img className={`${classes.twitterLinkLogo} ${classes.footerLinkLogo}`} src="footer/twitter_logo.svg" height="35rem" width="35rem"></img></a>
                </div>
                <div className={classes.rightsSection}>
                    <p className={classes.rightsLine}>&#169;Abubakar Javed. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;