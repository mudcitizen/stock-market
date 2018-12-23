export class Stock {

  public favorite: boolean = false;

  constructor(public name: string,
    public code: string,
    public price: number,
    public previousPrice: number) { }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }

  toString(): string {
    return `Code: ${this.code} ; Name: ${this.name}; Price: ${this.price} ; PreviousPrice: ${this.previousPrice} ; Favorite: ${this.favorite}`;
 

}
