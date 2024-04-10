import React from 'react';

import styles from './Button.module.css';
const Button = (props) => {
  const buttonStyles = props.alt ? styles.buttonAlt : styles.button;

  return (
    <button
      type={props.type}
      className={`${props.className} ${buttonStyles}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
  export default Button;
  