import { NgModule } from "@angular/core";
import { Routes } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { UnauthorizedComponent } from "./shared/unauthorized/unauthorized.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent, children:[
    {path:'', component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent, canActivate:[AuthGuard]},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit', component:RecipeEditComponent, canActivate:[AuthGuard]}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path:'signup', component:SignupComponent },
  { path:'signin', component:SigninComponent },
  { path:'unauthorized', component:UnauthorizedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}