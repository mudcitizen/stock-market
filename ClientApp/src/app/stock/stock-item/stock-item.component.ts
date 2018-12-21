import { Component, OnInit } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;
  
  constructor() { }

  ngOnInit() {
    this.stock = new Stock("Test Stock", "TSC", 85, 120);
    let diff = this.stock.price - this.stock.previousPrice;
    let largeChange = Math.abs(diff);
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
  }

  toggleFavorite(event): void {
    console.log("We are toggling the favorite state for this stock",event);
    this.stock.favorite = !this.stock.favorite;
  }

}
