import { useState } from "react";
import { Command } from "./command";

export const Invoker = () => {
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const executeCommand = (command) => {
    command.execute();
    setCommandHistory((prev) => [...prev, command]);
  };

  const undoLastCommand = () => {
    const lastCommand = commandHistory.pop();
    if (lastCommand) {
      lastCommand.undo();
      setCommandHistory([...commandHistory]);
    }
  };

  return { executeCommand, undoLastCommand };
};
