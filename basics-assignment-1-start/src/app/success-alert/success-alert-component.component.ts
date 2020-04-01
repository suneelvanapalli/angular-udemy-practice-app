import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert-component',
  templateUrl: './success-alert-component.component.html',
  styleUrls: ['./success-alert-component.component.css']
})
export class SuccessAlertComponentComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  getMessage(): String {
    return this.message;
  }

  ngOnInit(): void {
  }

}
