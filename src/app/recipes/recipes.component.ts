import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  selectedRecipe: Recipe;
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log('Recipe Selected Event : Received')
        console.log('Recipe details : ' + recipe)
        this.selectedRecipe = recipe;
      }
    );
  }

}
