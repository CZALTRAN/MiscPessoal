import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Dummy', 
            'Receita de bolo',
            'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg',
            [new Ingredient('Carne',1),new Ingredient('Batata frita',20)]),
        new Recipe('Outro Dummy', 'Receita de torta',
            'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg',
            [new Ingredient('Pão',2),new Ingredient('Carne',1)])
    ];

    constructor(private slService:ShoppingListService){}
    getRecipes()
    {
        return this.recipes.slice();
    }
    addIngredients(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}