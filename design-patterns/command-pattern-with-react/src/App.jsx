import "./App.css";
import { Counter } from "./Counter";
import { TextEditor } from "./TextEditor";

export default function App() {
  return (
    <div className={`main`}>
      <Counter />
      <TextEditor />
    </div>
  );
}
