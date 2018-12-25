import {
  Component, SimpleChanges, OnInit, OnChanges, OnDestroy,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterContentInit
} from '@angular/core';

import { Stock } from './model/stock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  public stockObj: Stock;

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('App Component - On Init');
  }

  testMethod(): void {
    console.log("Test method in AppComponent triggered";
  }

}
