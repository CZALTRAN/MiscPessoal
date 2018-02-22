import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject< Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Dummy', 
            'Receita de bolo',
            'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg',
            [new Ingredient('Carne',1),new Ingredient('Batata frita',20)]),
        new Recipe('Outro Dummy', 'Receita de torta',
            'http://www.curtamais.com.br/uploads/conteudos/940233e65d134dc121d7ffc296bcb872.jpg',
            [new Ingredient('Pão',2),new Ingredient('Carne',1)])
    ];

    constructor(private slService:ShoppingListService){}
    
    getRecipes()
    {
        return this.recipes.slice();
    }
    getRecipe(id:number){
        return this.recipes[id];
    }
    addIngredients(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}