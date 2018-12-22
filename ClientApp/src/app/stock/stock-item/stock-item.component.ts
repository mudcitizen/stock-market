import { Component, OnInit } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  private _stockStyles;
    public get stockStyles() {
        return this._stockStyles;
    }
    public set stockStyles(value) {
        this._stockStyles = value;
    }
  
  constructor() { }

  ngOnInit() {
    this.stock = new Stock("Test Stock", "TSC", 85, 60);
    let diff = this.stock.price - this.stock.previousPrice;
    let largeChange = Math.abs(diff);
    this.stockStyles = {
      "color": this.stock.isPositiveChange()  ? "green" : "red",
      "font-size": (this.stock.isPositiveChange() ? "1.2" : ".8")+"em"
    }
  }

  toggleFavorite(event): void {
    console.log("We are toggling the favorite state for this stock",event);
    this.stock.favorite = !this.stock.favorite;
  }

}
