import { Component, OnInit } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock("Test Stock", "TSC", 85, 60),
      new Stock("Second Stock Company", "SSC", 10, 20),
      new Stock("Last Stock Company", "LSC", 50.99, 69.99),
    ]
  }

  toggleFavorite(event, index): void {
    console.log("We are toggling the favorite state for this stock", event, index);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  handleSelection(event): void {
    console.log("handleSelection() called",event);
  }

}
