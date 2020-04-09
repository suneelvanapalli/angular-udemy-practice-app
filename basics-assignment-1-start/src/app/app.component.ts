import { Component } from '@angular/core';
import { ActivateService } from './Shared/activateService';
import { CounterService } from './Shared/counterService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActivateService, CounterService]
})
export class AppComponent {
  allowNew = true;
  message: string;
  successMessage: string = 'Success!';
  serverName: string;
  IsServerCreated: boolean;
  constructor() {
    this.IsServerCreated  = false;
    this.message = 'Server is not created!';
    setTimeout(() => {
      this.allowNew = true;
    }, 2000);
  }


  onAddNewClick = (inputEle: HTMLInputElement) => {
    this.IsServerCreated = true;
    this.message = 'Server name is created: ' + inputEle.value;
  }

  onTextChangeEvent = ($elem:Event) => {
      this.serverName  = (<HTMLInputElement>$elem.target).value;
  }
}
