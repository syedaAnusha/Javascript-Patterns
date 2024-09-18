import { useState } from "react";
export const StyleText = () => {
  const [styleText, setStyleText] = useState<string>("");

  const handleTextStyle = (
    text: string,
    start: any,
    end: any,
    styleType: string,
    isBold: boolean,
    isItalic: boolean
  ) => {
    const selected = text.slice(start, end);
    if (styleType === "bold" && isItalic !== true) {
      setStyleText(`<b>${selected}</b>`);
    }
    if (styleType === "italic" && isBold !== true) {
      setStyleText(`<i>${selected}</i>`);
    }
    if (isBold === true && isItalic === true) {
      setStyleText(`<b><i>${selected}</i></b>`);
    }
  };
  return { styleText, handleTextStyle };
};
