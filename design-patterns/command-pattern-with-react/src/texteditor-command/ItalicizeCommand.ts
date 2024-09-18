import { textCommand } from "./command";
export class ItalicizeCommand extends textCommand {
  constructor(
    private receiver: any,
    private start: any,
    private end: any,
    private isBold: boolean
  ) {
    super();
    this.receiver = receiver;
    this.start = start;
    this.end = end;
    this.isBold = false;
  }
  execute(text: string) {
    this.receiver.handleTextStyle(
      text,
      this.start,
      this.end,
      "italic",
      this.isBold
    );
  }
}
