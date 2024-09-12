import { Order } from "./Order";
import { StockTrade } from "./StockTrade";

//* Concrete Command Class
export class SellStockOrder extends Order {
  private stock: StockTrade;
  protected type: string;
  public constructor(stockTrade: StockTrade) {
    super();
    this.stock = stockTrade;
    this.type = "Sell";
  }
  public execute() {
    this.stock.sell();
  }
}
