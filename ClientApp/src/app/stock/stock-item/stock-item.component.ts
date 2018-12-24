import { Component, OnInit, Input, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from "../../model/stock.model";

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() { this.toggleFavorite = new EventEmitter<Stock>(); }
   gd
  onToggleFavorite(event): void {
    console.log("stock-item-component published", event);
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice(): void { this.stock.price += 5; }


}
