import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { CanActivateChild } from "@angular/router/src/interfaces";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
   
    constructor(private authService: AuthService,
        private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAutenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        )
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            return this.canActivate(childRoute, state);
    }
}