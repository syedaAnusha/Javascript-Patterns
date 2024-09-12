import { Command } from "./Command";
import { R2D2Service } from "./R2D2Service";

//* Concrete Command Class
export class CleanCommand extends Command {
  constructor(private R2D2Service: R2D2Service) {
    super();
  }

  public execute(): void {
    this.R2D2Service.clean();
  }
}
