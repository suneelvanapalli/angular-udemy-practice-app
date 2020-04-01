import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startClicked: EventEmitter<{ count: number }> = new EventEmitter<{ count: number }>();
  @Output() stopClicked: EventEmitter<{ count: number }> = new EventEmitter<{ count: number }>();
  index: number;
  handle: any;
  constructor() {
    this.index = 0;
   }

  ngOnInit(): void {
  }

  onStartClick() {
   this.handle =  setInterval(() => {
          this.index++;
          this.startClicked.emit( { count:  this.index});
    }, 1000);
  }

  onStopClick = () => {
      clearInterval(this.handle);
  }

}
