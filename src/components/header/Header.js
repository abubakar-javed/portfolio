import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Polygon from "./polygon/Polygon";

const Header = (props) => {
  const [heading, setHeading] = useState("Hello");
  const shapes = [
    { rotation: 15 },
    { rotation: 30 },
    { rotation: 45 },
    { rotation: 70 }
  ];
  useEffect(() => {
    if (props.ProfileData && props.ProfileData[0]?.header?.mainHeading) {
      setHeading(props.ProfileData[0].header.mainHeading);
    } else {
      setHeading("Hello");
    }
  }, [props.ProfileData])
  return (
    <div className={`${classes.header} container `}>
      <div className="row">
        <div className={`${classes.leftSiderow} col-3`}>
              {shapes.map((shape, index) => (
                <Polygon key={index} rotation={shape.rotation} initialAngle={90} />
              ))}
        </div>
        <div className={`${classes.text} col-6 text-center`} id="aboutHeading">{heading}</div>
        <div className={`${classes.rightSide} col-3`}>
              {shapes.map((shape, index) => (
                <Polygon key={index} rotation={-shape.rotation} initialAngle={-90} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
