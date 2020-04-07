import { Component, OnInit, Inject } from '@angular/core';
import { ActivateService } from '../Shared/activateService';
import { CounterService } from '../Shared/counterService';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [CounterService, ActivateService],
})
export class Assignment5Component implements OnInit {
  activeUsers: string[] = [];
  inActiveUsers: string[] = [];
  counter: number;
  constructor(
   private activateService: ActivateService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.activateService.activeUsers;
    this.inActiveUsers = this.activateService.InActiveUsers;
    this.counter = this.counterService.counter;
  }

  setStatusToActive(user: string) {
    this.activateService.setStatusToActive(user);
  }

  setStatusToInActive(user: string) {
    this.activateService.setStatusToInActive(user);
  }
}
