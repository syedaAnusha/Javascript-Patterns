import { Command } from "./command";

export class IncrementCommand extends Command {
  constructor(private receiver: any) {
    super();
    this.receiver = receiver;
  }
  public execute() {
    this.receiver.handleIncrement();
  }
  public undo() {
    this.receiver.handleDecrement();
  }
}
