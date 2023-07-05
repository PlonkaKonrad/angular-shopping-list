import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'Delicious easy to make dish',
      'https://www.nalesniki.eu/wp-content/uploads/2015/02/nalesniki_z_serem.jpg'
    ),
  ];
}
