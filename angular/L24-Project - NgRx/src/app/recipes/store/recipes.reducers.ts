import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from "./recipes.actions";
import * as fromApp from "../../store/app.reducer";


export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('Dummy',
            'Receita de bolo',
            'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg',
            [new Ingredient('Carne', 1), new Ingredient('Batata frita', 20)]),
        new Recipe('Outro Dummy', 'Receita de torta',
            'http://www.curtamais.com.br/uploads/conteudos/940233e65d134dc121d7ffc296bcb872.jpg',
            [new Ingredient('Pão', 2), new Ingredient('Carne', 1)])

    ]
};


export function recipeReducer(state =initialState , action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case RecipeActions.UPDATE_RECIPE:
            const oldRecipe = state.recipes[action.payload.index];
            const updatedRecipe = { ...oldRecipe, ...action.payload.recipe };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            }
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipeActions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload,1);
            return {
                ...state,
                recipes: oldRecipes
            }
        default:
            return state;
    }
}