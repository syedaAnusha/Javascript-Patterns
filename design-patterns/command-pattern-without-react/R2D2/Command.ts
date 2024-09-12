const MAX_UID_RANGE = 10000;

//* Abstract Command Class
export abstract class Command {
  protected uid: number = Math.floor(Math.random() * MAX_UID_RANGE);
  public abstract execute(args: any): void;
  public displayCommand(): string {
    console.log();
    return `R2D2: COMMAND UID:: ${this.uid}`;
  }
}
