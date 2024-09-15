import { textCommand } from "./command";
export class ItalicizeCommand extends textCommand {
  constructor(private receiver: any) {
    super();
    this.receiver = receiver;
  }
  public execute() {
    this.receiver.handleItalicizeText();
  }
}
