import { Ingredient } from '../../../shared/ingredient.model';
import { Action } from '@ngrx/store';
import * as ShoppingListActions from '../actions/shopping-list.action';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 100),
    new Ingredient('Tomatoes', 100),
    new Ingredient('Ginger', 5),
  ],
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.IngredientsActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    default:
      return state;
  }
}
