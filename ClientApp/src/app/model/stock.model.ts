export class Stock {

  public favorite: boolean = false;

  constructor(public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string) { }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }

  toString(): string {
    let s: string = `Code: ${this.code} ; Name: ${this.name}; Price: ${this.price} ; PreviousPrice: ${this.previousPrice} ; Favorite: ${this.favorite}`;
    s = JSON.stringify(this);
    return s;
  }

}
