import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    const list = [
      new Coffee('Double Expresso', 'Sunny Cafe', new PlaceLocation('Plot A3C, Ikodi Road', 'Lagos')),
      new Coffee('Caramel Americano', 'Starcoffee', new PlaceLocation('Chukwudi Street', 'Lagos'))
    ];

    callback(list);
  }

  save(coffee, calback) {
    calback(true);
  }
}
