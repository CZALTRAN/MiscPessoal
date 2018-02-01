import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeServices: RecipeService,
        private shoppingListService:ShoppingListService) { }
    storeRecipes() {
        return this.http.put('https://udemy-rec.firebaseio.com/recipes.json',
            this.recipeServices.getRecipes());
    }
    fetchRecipes() {
        this.http.get('https://udemy-rec.firebaseio.com/recipes.json').map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['Ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ).subscribe(
            (recipes: Recipe[]) => this.recipeServices.setRecipes(recipes)
            );
    }
    storeShoppingList() {
        return this.http.put('https://udemy-rec.firebaseio.com/shopping-list.json',
        this.shoppingListService.getIngredients());
    }
    fetchShoppingList() {
        this.http.get('https://udemy-rec.firebaseio.com/shopping-list.json').map(
            (response: Response) => {
                const ingredients: Ingredient[] = response.json();
                return ingredients;
            }
        ).subscribe(
            (ingredients: Ingredient[]) => this.shoppingListService.setIngredients(ingredients));
    }

}