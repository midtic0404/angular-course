import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService){

  };

  private recipes: Recipe[] = [
    new Recipe('A Test recipe',
    'a test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Veggie', 2)
    ]),
    new Recipe('Another Test recipe',
    'a test',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [
      new Ingredient('Meat', 2),
      new Ingredient('Noodle', 2)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
