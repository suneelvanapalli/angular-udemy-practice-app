import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignment3",
  templateUrl: "./assignment3.component.html",
  styleUrls: ["./assignment3.component.css"]
})
export class Assignment3Component implements OnInit {
  IsDetailsDisplayed: boolean;
  log: string[] = [];
  index: number;
  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {}

  onToggleClick = () => {
    this.IsDetailsDisplayed = !this.IsDetailsDisplayed;
    this.index++;
    this.log.push(this.index.toString() + "" + new Date().toString());
  };

  
}
