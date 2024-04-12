import React from "react";

import classes from "./Box.module.css"
const Box=(props)=>{
    const {height,width}=props.style;

    return(
        
        <div className={`${classes.boxContainer}`} style={{height:height,width:width}}>
        {props.children}
        </div>
        
    )
}


export default Box;



