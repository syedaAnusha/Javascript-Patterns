const MAX_UID_RANGE = 10000;

//* Abstract Command Class/Object
export abstract class Order {
  protected uid = Math.floor(Math.random() * MAX_UID_RANGE);
  protected type!: string;
  public displayOrder(): string {
    return `UID: ${this.uid} - Operation: ${this.type}`;
  }
  abstract execute(): void;
}
