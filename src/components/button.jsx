import React from "react";

const Button = ({ btnType, btnText, onClick }) => {
  return (
    <button className={btnType} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
