import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { BasicHighlightDirective } from './shared/basicHighlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { RecipeService } from './recipes/recipe.service';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/reducers/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    BasicHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    PageNotFoundComponent,
    RecipesEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ shoppingList: shoppingListReducer })],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
