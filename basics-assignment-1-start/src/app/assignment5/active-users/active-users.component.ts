import { Component, OnInit } from "@angular/core";
import { ActivateService } from "src/app/Shared/activateService";
import { User } from "src/app/Shared/user";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent   {
  activeUsers: User[];
  constructor(private activateService: ActivateService) {}


  getUsers(): User[] {
    return this.activateService.users.filter(
      (u) => u.IsActive === true
    );
  }

  toggleStatus = (user: string) => {
    this.activateService.toggleStatus(user);
  };
}
