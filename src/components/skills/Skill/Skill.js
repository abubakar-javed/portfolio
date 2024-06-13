import React from "react";
import classes from "./Skill.module.css";

const Skill = (props) => {
  const { logoShadow, detailsColor, detailsTextShadow,logoPadding } = props.style;

  return (
    <>
      <div className={`${classes.card}`}>
        <div className={`${classes.card_face}`}>
          <div className={`row`} style={{padding:logoPadding}}>
            <img
              src={props.element.logoSRC}
              alt={`${props.element.name} Logo`}
              style={{ filter: logoShadow ,height:"3rem",width:"7rem"}}
            />
          </div>
          <div
            className={`${classes.skill_details} row`}
            style={{ color: detailsColor, textShadow: detailsTextShadow }}
          >
            <span className={`text-center ${classes.skill_details_text}`} >
              {props.element.name}
              <br />
              {props.element.experience}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
