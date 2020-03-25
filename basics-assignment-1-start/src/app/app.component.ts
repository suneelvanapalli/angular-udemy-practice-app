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
  IsServerCreated: boolean;
  constructor() {
    this.IsServerCreated  = false;
    this.message = 'Server is not created';
    setTimeout(() => {
      this.allowNew = true;
    }, 2000);
  }


  onAddNewClick = (elem) => {
    console.log(elem);
    this.IsServerCreated = true;
    this.message = 'Server name is created: ' + this.serverName;
  }

  onTextChangeEvent = ($elem:Event) => {
      this.serverName  = (<HTMLInputElement>$elem.target).value;
  }
}
