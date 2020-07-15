import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
