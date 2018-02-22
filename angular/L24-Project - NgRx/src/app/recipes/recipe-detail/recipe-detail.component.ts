import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromRecipe from '../store/recipes.reducers'
import * as RecipeActions from '../store/recipes.actions'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState:Observable<fromRecipe.State>;
  id:number;

  constructor( 
    private route:ActivatedRoute,
    private router:Router,
    private store:Store<fromRecipe.FeatureState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id=+param['id']
        this.recipeState = this.store.select('recipes');
      });
  }
  onAddToShoppingList(){
    this.store.select('recipes').take(1).subscribe(
      (recipeState:fromRecipe.State) =>{
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
      }
    )
  }
  onEditRecipe(){
    debugger
    this.router.navigate(['edit'], {relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route})
  }
  onDeleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
