import React, { Fragment, useEffect, useState } from "react";
import Button from "./components/Button";
import { StyleText } from "./texteditor-command/StyleText";
import { BoldCommand } from "./texteditor-command/BoldCommand";
import { Invoker } from "./texteditor-command/Invoker";
import { ItalicizeCommand } from "./texteditor-command/ItalicizeCommand";

export const TextEditor = () => {
  const [selectedStart, setSelectedStart] = useState<any>(null);
  const [selectedEnd, setSelectedEnd] = useState<any>(null);
  const [text, setText] = useState("");
  const [isBoldOnly, setIsBoldOnly] = useState<boolean>(false);
  const [isItalicOnly, setItalicOnly] = useState<boolean>(false);

  const textStyle = StyleText();

  const boldText = new BoldCommand(
    textStyle,
    selectedStart,
    selectedEnd,
    isItalicOnly
  );
  const italicizeText = new ItalicizeCommand(
    textStyle,
    selectedStart,
    selectedEnd,
    isBoldOnly
  );

  const { executeCommand } = Invoker();

  const handleSelect = (event: any) => {
    setSelectedStart(event.target.selectionStart);
    setSelectedEnd(event.target.selectionEnd);
  };

  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: textStyle.styleText,
        }}
      />
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
        <Button
          name="Bold"
          onClick={() => {
            executeCommand(boldText, text);
            setIsBoldOnly(true);
          }}
        />
        <Button
          name="Italicize"
          onClick={() => {
            executeCommand(italicizeText, text);
            setItalicOnly(true);
          }}
        />
        <Button name="Undo" onClick={() => {}} />
        <Button name="Redo" onClick={() => {}} />
      </div>
    </Fragment>
  );
};
