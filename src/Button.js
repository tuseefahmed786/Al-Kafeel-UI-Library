import React from 'react';
const Button = ({ label, color,variant, width, borderRadius}) => {
  return (
    <button className={`default ${variant} ${width} ${borderRadius}`} style={{color:`${color}`}}>{label}</button>
  );
};

export default Button;
