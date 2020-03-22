import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert-component',
  templateUrl: './success-alert-component.component.html',
  styleUrls: ['./success-alert-component.component.css']
})
export class SuccessAlertComponentComponent implements OnInit {
  message: String = 'Success!';

  constructor() { }

  getMessage(): String {
    return this.message;
  }

  ngOnInit(): void {
  }

}
