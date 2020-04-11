import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public displaySection: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  // onDisplayRecipesClick = () => {
  //   this.displaySection.emit('recipes');
  // }

  // onDisplayShoppingListClick = () => {
  //   this.displaySection.emit('shoppinglist');
  // }

}
