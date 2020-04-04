import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('test1', 'test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('test2', 'test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('test3', 'test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick(selectedRecipe: Recipe) {
    this.onRecipeSelected.emit(selectedRecipe);
  }

}
