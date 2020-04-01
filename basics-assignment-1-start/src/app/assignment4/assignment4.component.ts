import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  numbersList: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  startClicked(input: { count: number }) {
      this.numbersList.push(input.count);
  }


  stopClicked(input: { count: number }) {
    console.log(input);
  }

}
