import React from "react";

import { ButtonProps } from "../interface/type";

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-950 text-white text-2xl p-2 rounded-md border hover:bg-slate-500 hover:text-black"
    >
      {name}
    </button>
  );
};

export default Button;
