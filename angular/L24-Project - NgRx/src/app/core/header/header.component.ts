import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent } from '@angular/common/http/src/response';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import * as fromAuth from '../../auth/store/auth.reducers'
import * as AuthActions from '../../auth/store/auth.actions'
import * as RecipeActions from '../../recipes/store/recipes.actions'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>()

  authState:Observable<fromAuth.State>;

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());


  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  

  // onSelect(feature: string)
  // {
  //   this.featureSelected.emit(feature);
  // }

}
