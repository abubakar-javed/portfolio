import React from 'react';

import styles from './Button.module.css';
const Button = (props) => {
  const buttonStyles = props.alt ? styles.buttonAlt : styles.button;
  const inline_styles=props.styles? props.styles:{};

  return (
    <button
      type={props.type}
      className={`${props.className} ${buttonStyles}`}
      onClick={props.onClick}
      style={inline_styles}
    >
      {props.children}
    </button>
  );
};
  export default Button;
  