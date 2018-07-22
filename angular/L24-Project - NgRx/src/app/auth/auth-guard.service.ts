import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import * as fromApp from '../store/app.reducer'
import * as fromAuth from '../auth/store/auth.reducers'
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/take'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store<fromApp.AppState>,
        private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').take(1).map(
            (authState: fromAuth.State) => {
                return authState.authenticated;
            });
    }

}