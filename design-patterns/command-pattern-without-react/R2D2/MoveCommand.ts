import { Command } from "./Command";
import { R2D2Service } from "./R2D2Service";

//* Concrete Command Class
export class MoveCommand extends Command {
  constructor(private R2D2Service: R2D2Service) {
    super();
  }

  public execute({ direction }: { direction: string }): void {
    this.R2D2Service.move(direction);
  }
}
