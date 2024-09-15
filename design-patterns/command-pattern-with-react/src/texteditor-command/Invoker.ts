import { useState } from "react";
import { textCommand } from "./command";

export const Invoker = () => {
  const [textCommandHistory, setTextCommandHistory] = useState<textCommand[]>(
    []
  );

  const executeCommand = (command: textCommand, text: string) => {
    command.execute(text);
    setTextCommandHistory((prev) => [...prev, command]);
  };

  return { executeCommand };
};
