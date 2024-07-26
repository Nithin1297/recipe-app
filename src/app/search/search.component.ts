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
  allItems: Array<recipe>;
  filteredItems: Array<recipe>;
  searchText: string = '';

  constructor(private recipeService: RecipeDataService) {
    this.allItems = this.recipeService.recipeData;
    this.filteredItems = this.allItems;
  }

  search() {
    this.filteredItems = this.allItems.filter((item) =>
      item.itemTitle.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log(this.filteredItems);
  }
}
