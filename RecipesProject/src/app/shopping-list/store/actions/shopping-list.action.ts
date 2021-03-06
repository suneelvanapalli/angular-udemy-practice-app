import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  public readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export type IngredientsActions = AddIngredient;
