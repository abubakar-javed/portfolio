import React from "react";
import classes from "./Header.module.css";
import Polygon from "./polygon/Polygon";

const shapes = [
  { rotation: 15 },
  { rotation: 30 },
  { rotation: 45 },
  { rotation: 70 }
];

const Header = () => {
  return (
    <div className={`${classes.header} container`}>
      <div className="row ml-0">
        <div className={`${classes.leftSiderow} col-md-3 col-sm-4 col-3`}>
          {shapes.map((shape, index) => (
            <Polygon key={index} rotation={shape.rotation} initialAngle={90} />
          ))}
        </div>
        <div className={`${classes.text} col-md-6 col-sm-4 col-5 text-center`} id="aboutHeading">Hello</div>
        <div className={`${classes.rightSide} col-md-3 col-sm-4 col-4 row p-0`}>
          <div className="col-lg-6 col-md-1 col-3 p-0 p-lg-1"></div>
          <div className="col-lg-6 col-md-10 col-9 p-0">
            {shapes.map((shape, index) => (
              <Polygon key={index + shapes.length} rotation={-shape.rotation} initialAngle={-90} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
