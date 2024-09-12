//* Concrete Commands
import { BuyStockOrder } from "./BuyStockOrder";
import { SellStockOrder } from "./SellStockOrder";

//* To initialize Stocks
import { StockTrade } from "./StockTrade";

//* Receiver
import { Agent } from "./Agent";

const stock = new StockTrade();
const buyStock = new BuyStockOrder(stock);
const sellStock = new SellStockOrder(stock);

const agent = new Agent();
agent.placeOrder(buyStock);
agent.placeOrder(sellStock);
console.log(agent.listOrders());
