import {
  Component, SimpleChanges, OnInit,
  OnChanges, OnDestroy, DoCheck, AfterViewChecked,
  AfterViewInit, AfterContentChecked,
  AfterContentInit, Input,
  Output, EventEmitter
} from '@angular/core';
import { Stock } from '../../model/stock.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() { this.toggleFavorite = new EventEmitter<Stock>(); }
  onToggleFavorite(event): void {
    console.log("stock-item-component published", event);
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice(): void { this.stock.price += 5; }

  ngOnInit(): void {
  }

}
