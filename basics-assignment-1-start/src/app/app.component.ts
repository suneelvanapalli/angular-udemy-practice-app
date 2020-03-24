import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNew = true;
  message: string;
  serverName: string;
  constructor() {
    setTimeout(() => {
      this.allowNew = true;
    }, 2000);
  }

  onAddNewClick = (elem) => {
    console.log(elem);
    this.message = 'Button clicked';
  }

  onTextChangeEvent = ($elem:Event) => {
      this.serverName  = (<HTMLInputElement>$elem.target).value;
  }
}
