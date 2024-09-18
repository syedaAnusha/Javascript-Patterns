import { textCommand } from "./command";
export class BoldCommand extends textCommand {
  constructor(
    private receiver: any,
    private start: any,
    private end: any,
    private isItalic: boolean
  ) {
    super();
    this.receiver = receiver;
    this.start = start;
    this.end = end;
    this.isItalic = false;
  }
  execute(text: string) {
    this.receiver.handleTextStyle(
      text,
      this.start,
      this.end,
      "bold",
      this.isItalic
    );
  }
}
