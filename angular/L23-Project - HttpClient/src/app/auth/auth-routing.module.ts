import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { RouterModule } from "@angular/router";

const authRoute: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(authRoute)],
    exports: [RouterModule]})
export class AuthRoutingModule {

}