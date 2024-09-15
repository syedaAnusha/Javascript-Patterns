import React, { Fragment } from "react";
import Button from "./components/Button";

import { CustomCounter } from "./button-command/Counter";
import { Invoker } from "./button-command/Invoker";
import { IncrementCommand } from "./button-command/IncrementCommand";
import { DecrementCommand } from "./button-command/DecrementCommand";

export const Counter = () => {
  const counter = CustomCounter();

  const increment = new IncrementCommand(counter);
  const decrement = new DecrementCommand(counter);

  const { executeCommand, undoLastCommand } = Invoker();
  return (
    <Fragment>
      <section className="flex flex-row justify-center items-center gap-3">
        <h2>COUNTER: {counter.count}</h2>
        <Button name="Increment" onClick={() => executeCommand(increment)} />
        <Button name="Decrement" onClick={() => executeCommand(decrement)} />
        <Button name="Undo" onClick={undoLastCommand} />
      </section>
    </Fragment>
  );
};
