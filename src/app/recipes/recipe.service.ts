import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  constructor(private shoppingListService: ShoppingListService) {
    
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Plain Hamburger',
      'A simple hamburger', 
      'assets/Hamburger.jpg',
      [
        new Ingredient('beef', 1)
      ]
      ),

      new Recipe(
        'Cheeseburger',
        'A simple Cheeseburger', 
        'assets/Cheeseburger.jpg',
        [
          new Ingredient('beef', 1),
          new Ingredient('cheese', 1)
        ]
        ),
      new Recipe(
        'Best Brownie Recipe', 
        'The best brownies ever', 
        'assets/brownie001.jpg',
        [
          new Ingredient('sugar', 1),
          new Ingredient('cocao', 1),
          new Ingredient('eggs', 1)
        ]
        )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    console.log("addIngredientsToShoppingList : " + recipe.ingredients[0].name)
    this.shoppingListService.receiveRecipe(recipe)
  };

}