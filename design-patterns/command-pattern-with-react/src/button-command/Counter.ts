import { useState } from "react";

export const CustomCounter = () => {
  const [count, setCounter] = useState(0);
  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => prev - 1);
  return { count, handleIncrement, handleDecrement };
};
