import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counterService';

@Injectable()
export class ActivateService {
  public activeUsers: string[] = ['Tom', 'Steve', 'Smith'];
  public InActiveUsers: string[] = ['Harry', 'Ricky', 'Jason'];

  constructor(private counterService: CounterService) {}

  setStatusToActive(user: string) {
    this.counterService.setCounter();
    this.activeUsers.push(user);
    this.InActiveUsers.splice(this.InActiveUsers.indexOf(user), 1);
  }
  setStatusToInActive(user: string) {
    this.counterService.setCounter();
    this.InActiveUsers.push(user);
    this.activeUsers.splice(this.InActiveUsers.indexOf(user), 1);
  }


}
