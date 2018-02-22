import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ShoppingListActions from "./store/shopping-list.actions";
import * as fromApp from '../store/app.reducer'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(    private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.shoppingListState = this.store.select('shoppingList');
  }
  ngOnDestroy(): void {
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
