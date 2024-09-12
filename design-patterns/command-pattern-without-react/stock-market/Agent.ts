import { StockTrade } from "./StockTrade";

export class Agent {
  private stockTrade: StockTrade = new StockTrade();
  public constructor() {}

  //* Most relevant code smell ⚠️, which is coupled to the actions/commands from StockTrade..!! 👇
  placeOrder(orderType: string) {
    if (orderType === "buy") this.stockTrade.buy();
    else if (orderType === "sell") this.stockTrade.sell();
    else console.log("OPERATION NOT FOUND");
  }
}
