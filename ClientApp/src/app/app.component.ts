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

  ngOnInit() {
    this.stockObj = new Stock("Test Stock Co.", "TSC", 85, 80);
  }

}
