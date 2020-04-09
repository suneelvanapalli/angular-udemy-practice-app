import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counterService";
import { User } from "./user";

@Injectable()
export class ActivateService {
  users: User[] = [
    new User("Tom", true),
    new User("Steve", true),
    new User("Smith", true),
    new User("Harry", false),
    new User("Ricky", false),
    new User("Jason", false),
  ];

  constructor(private counterService: CounterService) {}

  toggleStatus = (id: number) => {
    this.users[id].IsActive = !this.users[id].IsActive;
  };
}
