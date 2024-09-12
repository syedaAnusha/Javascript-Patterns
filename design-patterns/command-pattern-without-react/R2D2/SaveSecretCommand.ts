import { Command } from "./Command";
import { StoreService } from "./StoreService";

export class SaveSecretCommand extends Command {
  public constructor(private storeService: StoreService) {
    super();
  }
  public execute({ message }: { message: string }): void {
    console.log("EXECUTE --> EXECUTE-COMMAND ");
    this.storeService.storeMessage(message);
    console.log();
  }
}
