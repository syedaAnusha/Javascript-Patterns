import React, { Fragment, useEffect, useState } from "react";
import Button from "./components/Button";
import { StyleText } from "./texteditor-command/StyleText";
import { BoldCommand } from "./texteditor-command/BoldCommand";
import { Invoker } from "./texteditor-command/Invoker";

export const TextEditor = () => {
  const [selectedStart, setSelectedStart] = useState<any>(null);
  const [selectedEnd, setSelectedEnd] = useState<any>(null);

  const textStyle = StyleText();

  const boldText = new BoldCommand(textStyle, selectedStart, selectedEnd);

  const { executeCommand } = Invoker();

  const [text, setText] = useState("");

  const handleSelect = (event) => {
    setSelectedStart(event.target.selectionStart);
    setSelectedEnd(event.target.selectionEnd);
  };

  return (
    <Fragment>
      {textStyle.boldText}
      <div className="border-2 border-black rounded-md p-10 flex flex-col">
        <fieldset>
          <legend>
            <label htmlFor="textarea" className="text-xl">
              Type text here
            </label>
          </legend>
          <textarea
            name={text}
            id="text-area"
            onSelect={handleSelect}
            className="p-2"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </fieldset>
        <Button name="Bold" onClick={() => executeCommand(boldText, text)} />
        <Button name="Italicize" onClick={() => {}} />
        <Button name="Undo" onClick={() => {}} />
        <Button name="Redo" onClick={() => {}} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: boldText }} />
    </Fragment>
  );
};
