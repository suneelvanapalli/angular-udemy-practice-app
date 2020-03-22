import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert-component',
  templateUrl: './warning-alert-component.component.html',
  styleUrls: ['./warning-alert-component.component.css']
})
export class WarningAlertComponentComponent implements OnInit {
  message: String = 'Warning!';
  constructor() { }

  ngOnInit(): void {
  }

}
