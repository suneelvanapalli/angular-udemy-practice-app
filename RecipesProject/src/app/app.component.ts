import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipesProject';
  showRecipesMenu: boolean;
  showShoppingList: boolean;

  onDisplaySectionSelected = (displaySection) => {
      if (displaySection === 'recipes') {
          this.showRecipesMenu = true;
          this.showShoppingList = false;
      }
      if (displaySection === 'shoppinglist') {
        this.showShoppingList = true;
        this.showRecipesMenu = false;
    }
  }
}
