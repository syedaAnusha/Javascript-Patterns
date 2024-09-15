import { useState } from "react";
export const StyleText = () => {
  const [boldText, setBoldText] = useState<string>("");
  const handleBoldText = (text: string, start: any, end: any) => {
    const startSelection = text.slice(0, start);
    const selected = text.slice(start, end);
    const endSelection = text.slice(end);
    setBoldText(startSelection + `<b>${selected}</b>` + endSelection);
  };
  return { boldText, handleBoldText };
};
