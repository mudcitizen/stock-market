import { Component,OnInit } from '@angular/core';
import { Stock } from './model/stock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  public stockObj: Stock;
  private counter: number = 1;

  ngOnInit() {
    //this.stockObj = new Stock("Test Stock Company - " + this.counter++ , "TSC", 85, 80);
    this.changeStockObject();
  }

  handleToggleFavorite(stock: Stock): void {
    this.stockObj.favorite = !this.stockObj.favorite;
    console.log("app-component notified", stock.toString());
  }

  changeStockObject(): void {
    this.stockObj = new Stock("Test Stock Company - " + this.counter++, "TSC", 85, 80);
  }

  changeStockPrice(): void { this.stockObj.price += 10; }
}
