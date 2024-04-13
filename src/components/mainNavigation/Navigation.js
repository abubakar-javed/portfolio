import classes from "./Navigation.module.css"

const Navigation = () => {

    return (
        <>
            <div className={classes.navigation}>
                <a href="#aboutHeading" ><img className={`${classes.homeNavLogo} ${classes.NavLogos}`} src="NavigationLogos/home_nav_logo.svg" height="50rem" width="50rem"></img></a>
                <a href="#skillsHeading" ><img className={`${classes.skillsNavLogo} ${classes.NavLogos}`} src="NavigationLogos/skills_nav_logo.svg" height="50rem" width="50rem"></img></a>
                <a href="#experienceHeading" ><img className={`${classes.experienceNavLogo} ${classes.NavLogos}`} src="NavigationLogos/experience_nav_logo.svg" height="50rem" width="50rem"></img></a>
                <a href="#projectsHeading"><img className={`${classes.projectsNavLogo} ${classes.NavLogos}`} src="NavigationLogos/projects_nav_logo.svg" height="50rem" width="50rem"></img></a>
                <a href="#contactHeading"><img className={`${classes.contactNavLogo} ${classes.NavLogos}`} src="NavigationLogos/contact_nav_logo.svg" height="50rem" width="50rem"></img></a>
            </div>
        </>
    )
}

export default Navigation;