import Button from "./components/Button";
import "./App.css";

import { Counter } from "./button-command/Counter";
import { Invoker } from "./button-command/Invoker";
import { IncrementCommand } from "./button-command/IncrementCommand";
import { DecrementCommand } from "./button-command/DecrementCommand";

export default function App() {
  const counter = Counter();

  const increment = new IncrementCommand(counter);
  const decrement = new DecrementCommand(counter);

  const { executeCommand, undoLastCommand } = Invoker();

  return (
    <div className={`main`}>
      <h2>COUNTER: {counter.count}</h2>
      <Button name="Increment" onClick={() => executeCommand(increment)} />
      <Button name="Decrement" onClick={() => executeCommand(decrement)} />
      <Button name="Undo" onClick={undoLastCommand} />
    </div>
  );
}
