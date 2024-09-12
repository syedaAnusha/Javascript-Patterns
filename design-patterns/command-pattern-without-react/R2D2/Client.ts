//* Services
import { StoreService } from "./StoreService";
import { R2D2Service } from "./R2D2Service";

//* Concrete Commands
import { SaveSecretCommand } from "./SaveSecretCommand";
import { MoveCommand } from "./MoveCommand";
import { CleanCommand } from "./CleanCommand";

//* Receiver
import { R2D2Agent } from "./R2D2Agent";

//* Invoker
const Secret_Service = new StoreService();
const R2D2_Service = new R2D2Service();

const save_secret_command = new SaveSecretCommand(Secret_Service);
const move_command = new MoveCommand(R2D2_Service);
const clean_command = new CleanCommand(R2D2_Service);

const agent = new R2D2Agent();
agent.executeCommand(save_secret_command, { message: "Super Secret Message" });
agent.executeCommand(move_command, { direction: "move to right" });
agent.executeCommand(clean_command);

console.log(agent.listCommands());
