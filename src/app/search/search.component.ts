import { Component } from '@angular/core';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  search() {
    // return this.allitems.filter(item => item.includes(this.searchText))
  }
  allitems: Array<recipe> = [];
  searchText: string = '';
  constructor(private recipeservice: RecipeDataService) {
    this.allitems = this.recipeservice.recipeData;
  }
}
