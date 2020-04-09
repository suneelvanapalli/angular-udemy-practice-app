import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/user';
import { ActivateService } from 'src/app/Shared/activateService';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  inActiveUsers: User[];
  constructor(private activateService: ActivateService) {}

  getUsers(): User[] {
    return this.activateService.users.filter(
      (u) => u.IsActive === false
    );
  }

  toggleStatus = (id: number) => {
     this.activateService.toggleStatus(id);
  };
}
