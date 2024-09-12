export class R2D2Service {
  constructor() {}
  public clean(): void {
    console.log(`R2D2 SERVICE --> CLEAN`);
  }
  public move(direction: string): void {
    console.log(`R2D2 SERVICE --> MOVE: ${direction}`);
  }
}
