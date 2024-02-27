import React from "react";

const Button = ({children, bgColor }) => {
  const bg = bgColor === 'white' ? 'bg-white' : "bg-green-600";
  const color = bgColor === 'white' ? 'text-green-600' : 'text-white';
  const border = bgColor === "white" ? `border-solid border-2 border-green-600 ` : "border-white";
  return (
    <div className={`flex justify-center self-start px-3 py-1.5 mt-8 text-base  rounded-lg ${bg} ${color} ${border}`}>
      {children}
    </div>
  );
};

export default Button;
