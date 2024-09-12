import { Command } from "./command";

export class DecrementCommand extends Command {
  constructor(private receiver: any) {
    super();
    this.receiver = receiver;
  }
  public execute() {
    this.receiver.handleDecrement();
  }
  public undo() {
    this.receiver.handleIncrement();
  }
}
