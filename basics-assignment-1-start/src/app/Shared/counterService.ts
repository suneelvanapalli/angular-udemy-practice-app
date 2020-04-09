import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementCounter(IsActive: boolean) {
    if (IsActive === false) {
      this.activeToInactiveCounter++;
    } else {
      this.inactiveToActiveCounter++;
    }
    console.log('Active to InActive counter' + this.activeToInactiveCounter.toString());
    console.log('InActive to Active counter' + this.inactiveToActiveCounter.toString());
  }
}
