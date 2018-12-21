import { Component, OnInit } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  
  constructor() { }

  ngOnInit() {
    this.stock = new Stock("Test Stock", "TSC", 85, 80);
  }

  toggleFavorite(event): void {
    console.log("We are toggling the favorite state for this stock",event);
    this.stock.favorite = !this.stock.favorite;
  }

}
