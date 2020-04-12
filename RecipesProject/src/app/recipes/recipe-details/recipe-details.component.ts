import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  currentRecipeId: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((selectedRecipe: Recipe) => {
    //   this.recipe = selectedRecipe;
    // });

    this.route.params.subscribe((params: Params) => {
      this.currentRecipeId = +params.id;
      // tslint:disable-next-line:no-string-literal
      this.recipe = this.recipeService.getRecipe(this.currentRecipeId);
    });
  }
}
