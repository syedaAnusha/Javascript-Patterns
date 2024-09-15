import { textCommand } from "./command";
export class BoldCommand extends textCommand {
  constructor(private receiver: any, private start: any, private end: any) {
    super();
    this.receiver = receiver;
    this.start = start;
    this.end = end;
  }
  execute(text: string) {
    this.receiver.handleBoldText(text, this.start, this.end);
  }
}
