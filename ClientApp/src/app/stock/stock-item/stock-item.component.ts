import { Component, OnInit, Input } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() public stock: Stock;

  constructor() { }
  
  toggleFavorite(event, index): void {
    console.log("We are toggling the favorite state for this stock", event, index);
    this.stock.favorite = !this.stock.favorite;
  }

}
