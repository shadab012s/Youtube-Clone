import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg text-sm sm:text-base hover:bg-gray-300 transition-all duration-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
