import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Polygon.module.css";

const Polygon = ({ rotation, initialAngle }) => {
  const [currentAngle, setCurrentAngle] = useState(initialAngle);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAngle((prevAngle) => {
        return prevAngle === initialAngle ? rotation : initialAngle;
      });
    }, 7000); 

    return () => clearInterval(interval);
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

export default Polygon;
