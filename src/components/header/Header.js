import React from "react";
import classes from "./Header.module.css";
import Polygon from "./polygon/Polygon";

const Header = () => {
  const shapes = [
    { rotation: 15 },
    { rotation: 30 },
    { rotation: 45 },
    { rotation: 70 }
  ];

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        {shapes.map((shape, index) => (
          <Polygon key={index} rotation={shape.rotation} initialAngle={90} />
        ))}
      </div>
      <div className={classes.text}>Hello</div>
      <div className={classes.rightSide}>
        {shapes.map((shape, index) => (
          <Polygon key={index} rotation={-shape.rotation}  initialAngle={-90}/>
        ))}
      </div>
    </div>
  );
};

export default Header;
