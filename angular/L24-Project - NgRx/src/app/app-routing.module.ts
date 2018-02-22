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
import { HomeComponent } from "./core/home/home.component";
import { PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  { path: '', component:HomeComponent, pathMatch:'full' },
  { path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path:'unauthorized', component:UnauthorizedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}