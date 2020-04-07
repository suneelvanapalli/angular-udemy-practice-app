import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter: number;

  setCounter = () => this.counter++;
}
