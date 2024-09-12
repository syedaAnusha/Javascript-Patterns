const GENERATE_RANDOM_NUMBER = 10000;

//* Abstract Command Class/Object
export abstract class Order {
  protected uid = Math.floor(Math.random() * GENERATE_RANDOM_NUMBER);
  protected type!: string;
  public displayOrder(): string {
    return `UID: ${this.uid} - Operation: ${this.type}`;
  }
  abstract execute(): void;
}
