import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RecipesProject';
  showRecipesMenu: boolean;
  showShoppingList: boolean;
  display: boolean = false;

  constructor() {}

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

  onToggleClick() {
    this.display = !this.display;
  }
}
