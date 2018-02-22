import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer'
import * as fromAuth from '../auth/store/auth.reducers'


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private store: Store<fromApp.AppState>){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any>> {
            console.log('Interceptado!', req);
            // const reqCopy = req.clone({params:req.params.append('auth',this.authService.getToken())});                
            return this.store.select('auth').take(1).switchMap((authState:fromAuth.State) => {
                const reqCopy = req.clone({params:req.params.set('auth',authState.token)});                
                return next.handle(reqCopy);
            }) ;
    }
    
}