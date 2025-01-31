import React from "react";

function Button({ className = "", children, buttonType = "primary", ...rest }) {
  return (
    <button
      className={`px-3 py-2 rounded w-full text-white ${
        buttonType === "secondary" ? "bg-[#493b2de6]" : "bg-[#493B2D]"
      }  cursor-pointer ${
        buttonType === "secondary" ? "" : "hover:bg-[#493b2dda]"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
