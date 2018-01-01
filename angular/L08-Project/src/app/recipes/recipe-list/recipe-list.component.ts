import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeChange = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Dummy', 'Receita de bolo', 
      'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg'),
    new Recipe('Outro Dummy', 'Receita de torta', 
      'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe)
  {
    this.onRecipeChange.emit(recipe);
  }

}
