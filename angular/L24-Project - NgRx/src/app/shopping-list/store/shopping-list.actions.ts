import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action {
    type = ADD_INGREDIENT;
    constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
    type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
    type = UPDATE_INGREDIENTS;
    constructor(public payload: { ingredient: Ingredient }) { }
}

export class DeleteIngredient implements Action {
    type = DELETE_INGREDIENTS;
    public payload = null;
    constructor() { }
}

export class StartEdit implements Action {
    type = START_EDIT;
    constructor(public payload: number) { }
} 

export class StopEdit implements Action {
    type = STOP_EDIT;
    public payload = null;
    constructor() { }
} 

export type ShoppingListActions =
    AddIngredient |
    AddIngredients |
    UpdateIngredient |
    DeleteIngredient |
    StartEdit| StopEdit;