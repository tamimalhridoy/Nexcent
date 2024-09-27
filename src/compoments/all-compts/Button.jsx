import React from "react";

const Button = ({ title, type = "text" }) => {
  return (
    <div>
      <button className="font-medium text-sm font-primary text-brand py-2 px-5 hover:bg-brand hover:text-white rounded-lg cursor-pointer">
        {title}
      </button>
    </div>
  );
};

export default Button;
