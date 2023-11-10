import React from 'react';
const Button = ({ label, color,variant, width, borderRadius}) => {
  const [first, setfirst] = React.useState("hello")

  console.log(first)
  return (
    <button className={`default ${variant} ${width} ${borderRadius}`} style={{color:`${color}`}}>{label}</button>
  );
};

export default Button;
