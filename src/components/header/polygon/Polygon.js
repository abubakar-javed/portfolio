import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import classes from "./Polygon.module.css";

const Polygon = ({ rotation, initialAngle }) => {
  const [currentAngle, setCurrentAngle] = useState(initialAngle);

  useEffect(() => {
    const animate = () => {
      setCurrentAngle((prevAngle) => prevAngle === initialAngle ? rotation : initialAngle);
    };
    
    const intervalId = setInterval(animate, 7000);
    return () => clearInterval(intervalId);
  }, [rotation, initialAngle]);

  const style = {
    transform: `rotate(${currentAngle}deg)`,
    transition: "transform 0.7s ease-in-out",
  };

  return (
    <div className={classes.box}>
      <img
        className={classes.polygon}
        alt="Polygon"
        src="basic/polygon.svg"
        style={style}
      />
    </div>
  );
};

Polygon.propTypes = {
  rotation: PropTypes.number.isRequired,
  initialAngle: PropTypes.number.isRequired,
};

export default memo(Polygon);
