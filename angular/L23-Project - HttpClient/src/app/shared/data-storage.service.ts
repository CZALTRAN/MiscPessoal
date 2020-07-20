import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
         private recipeServices: RecipeService,
        private shoppingListService: ShoppingListService,
        private authService: AuthService
    ) { }
    storeRecipes() {
        // const headers = new HttpHeaders().set('Authorization','jfiHlkLKHHlklLKAFJI18YR98');
        // return this.httpClient.put('https://udemy-rec.firebaseio.com/recipes.json',
        //     this.recipeServices.getRecipes(),{
        //         observe:'body',
        //         params: new HttpParams().set('auth',token)
        //         // headers: headers
        //     });

        const req = new HttpRequest('PUT','https://udemy-rec.firebaseio.com/recipes.json', 
            this.recipeServices.getRecipes(),
            {reportProgress:true});
        return this.httpClient.request(req);
    }
    fetchRecipes() {
        // this.httpClient.get<Recipe[]>('https://udemy-rec.firebaseio.com/recipes.json?auth=' + token).map(
        this.httpClient.get<Recipe[]>('https://udemy-rec.firebaseio.com/recipes.json',{
            observe:'body',
            responseType:'json'
        }).map(
            (recipes) => {
                console.log(recipes)
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
                // return [];
            }
        ).subscribe(
            (recipes: Recipe[]) => this.recipeServices.setRecipes(recipes));
    }
    storeShoppingList() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://udemy-rec.firebaseio.com/shopping-list.json?auth=' + token,
            this.shoppingListService.getIngredients());
    }
    fetchShoppingList() {
        const token = this.authService.getToken();
        this.httpClient.get<Ingredient[]>('https://udemy-rec.firebaseio.com/shopping-list.json?auth=' + token).map(
            (response) => {
                const ingredients: Ingredient[] = response;
                return ingredients;
            }
        ).subscribe(
            (ingredients: Ingredient[]) => this.shoppingListService.setIngredients(ingredients)
        );
    }

}