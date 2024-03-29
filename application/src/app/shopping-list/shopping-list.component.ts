import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];

  constructor() {
    console.log(this.ingredients[0].name); // Sprawdź, czy dane są poprawnie przypisane
  }
}
