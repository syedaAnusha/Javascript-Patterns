import { Order } from "./Order";

export class Agent {
  private Orders: Order[] = [];
  public constructor() {}

  //* Most relevant code smell ⚠️, which is coupled to the actions/commands from StockTrade..!! 👇
  placeOrder(order: Order) {
    this.Orders.push(order);
    order.execute();
  }

  listOrders(): string {
    return this.Orders.reduce(
      (acc, cur) => acc + cur.displayOrder() + "\n",
      ""
    );
  }
}
