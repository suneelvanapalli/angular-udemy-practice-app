import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

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
  ngOnInit(): void {
  }


  onAddNewClick = (inputEle: HTMLInputElement) => {
    this.IsServerCreated = true;
    this.message = 'Server name is created: ' + inputEle.value;
  }

  onTextChangeEvent = ($elem:Event) => {
      this.serverName  = (<HTMLInputElement>$elem.target).value;
  }

}
