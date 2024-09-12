import { Command } from "./Command";

//* Receiver Class
export class R2D2Agent {
  private commands: Command[] = [];
  constructor() {}
  public executeCommand(command: Command, commandArgs?: any) {
    this.commands.push(command);
    command.execute(commandArgs);
  }
  public listCommands(): string {
    return this.commands.reduce(
      (acc, cur) => acc + cur.displayCommand() + "\n",
      ""
    );
  }
}
