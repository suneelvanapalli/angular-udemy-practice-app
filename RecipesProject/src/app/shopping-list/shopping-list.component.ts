import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 100),
    new Ingredient('Tomatoes', 100),
    new Ingredient('Ginger', 5)
  ];
  constructor() { }

  ngOnInit() {
  }
  addIngredientClicked(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
