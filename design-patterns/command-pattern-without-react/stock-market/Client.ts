import { Agent } from "./Agent";
import { BuyStockOrder } from "./BuyStockOrder";
import { SellStockOrder } from "./SellStockOrder";
import { StockTrade } from "./StockTrade";

const stock = new StockTrade();
const buyStock = new BuyStockOrder(stock);
const sellStock = new SellStockOrder(stock);
const agent = new Agent();
agent.placeOrder(buyStock);
agent.placeOrder(sellStock);
console.log(agent.listOrders());
