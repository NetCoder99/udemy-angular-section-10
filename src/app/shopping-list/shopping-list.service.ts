import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    console.log("Getting " + this.ingredients.length + " ingredients");
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log("Ingredient was added:" + ingredient.name);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  receiveRecipe(recipe: Recipe) {
    console.log("receiveIngredients was called for " + recipe.name);
    this.ingredients.push(...recipe.ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}