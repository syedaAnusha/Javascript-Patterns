import { Order } from "./Order";
import { StockTrade } from "./StockTrade";

//* Concrete Command Class
export class BuyStockOrder extends Order {
  private stock: StockTrade;
  protected type: string;
  public constructor(stockTrade: StockTrade) {
    super();
    this.stock = stockTrade;
    this.type = "Buy";
  }
  public execute(): void {
    this.stock.buy();
  }
}
