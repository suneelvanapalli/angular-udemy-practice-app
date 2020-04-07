import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../Shared/activateService';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [ActivateService],
})
export class Assignment5Component implements OnInit {
  activeUsers: string[] = [];
  inActiveUsers: string[] = [];
  constructor(private activateService: ActivateService) {}

  ngOnInit(): void {
    this.activeUsers = this.activateService.activeUsers;
    this.inActiveUsers = this.activateService.InActiveUsers;
  }
}
