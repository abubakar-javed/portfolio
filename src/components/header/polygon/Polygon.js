import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Polygon.module.css";

const Polygon = ({ rotation,initialAngle }) => {
  const [currentRotation, setCurrentRotation] = useState(initialAngle);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentRotation(rotation);
    }, 100); 

    return () => clearTimeout(timeout); 
  }, [rotation]);

  const style = {
    transform: `rotate(${currentRotation}deg)`,
    transition: "transform 0.7s ease-in-out",
  };

  return (
    <div className={classes.box}>
      <img
        className={classes.polygon}
        alt="Polygon"
        src="polygon.svg"
        style={style}
      />
    </div>
  );
};

Polygon.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default Polygon;
