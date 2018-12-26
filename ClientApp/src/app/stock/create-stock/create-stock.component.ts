import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock.model';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed: boolean;
  public exchanges: Array<string> = ['NASDAQ', 'NYSE', 'OTHER'];


  constructor() {
    this.stock = new Stock("test", '', 0, 0,'NASDAQ');
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock() { console.log("Creating stock", this.stock.toString()); }

}
