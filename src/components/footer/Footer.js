import classes from "./Footer.module.css"

const Footer = () => {

    return (
        <>
        <div className={classes.footer}>
            <h2 className={classes.footerTitle}>Abubakar Javed</h2>
            <ul className={classes.footerNavigation}>
                <li><a className={classes.footerNavigationItem}>About</a></li>
                <li><a className={classes.footerNavigationItem}>Skills</a></li>
                <li><a className={classes.footerNavigationItem}>Experience</a></li>
                <li><a className={classes.footerNavigationItem}>Project</a></li>
                <li><a className={classes.footerNavigationItem}>Testimonials</a></li>
                <li><a className={classes.footerNavigationItem}>Contact</a></li>
            </ul>
            <div className={classes.footerLinks}>
                <img className={classes.footerLinkItem} src=""></img>
                <img className={classes.footerLinkItem} src=""></img>
                <img className={classes.footerLinkItem} src=""></img>
            </div>
        </div>
        </>
    )
}

export default Footer;