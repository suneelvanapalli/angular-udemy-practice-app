import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 100),
    new Ingredient("Tomatoes", 100),
    new Ingredient("Ginger", 5),
  ];

  getIngredients(): Ingredient[] {
      return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
