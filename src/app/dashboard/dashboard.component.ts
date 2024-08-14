import { Component, Input } from '@angular/core';
import { RecipecardComponent } from '../recipecard/recipecard.component';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { SearchComponent } from '../search/search.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { catchError, debounceTime, of, startWith, switchMap } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface User {
  id: string;
  name: string;
  poster: string;
  image: string;
  type: string;
  duration: string;
  link: string;
  procedure: string;
  ingrediants: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RecipecardComponent,
    SearchComponent,
    FormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  allitems!: Array<recipe>;
  filteredItems: Array<recipe> = [];
  searchForm!: FormGroup;

  updateFilteredItems(items: Array<recipe>) {
    this.filteredItems = items;
  }
  constructor(
    private fb: FormBuilder,
    private recipeservice: RecipeDataService
  ) {
    // this.allitems = this.recipeservice.recipeData;
    this.searchForm = this.fb.group({
      search: '',
    });
  }
  ngOnInit() {
    // this.loadRecipies();
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchTerm) =>
          this.recipeservice.searchUser(searchTerm).pipe(
            catchError((err) => {
              console.log(err);
              return of([]);
            })
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
        this.allitems = data;
      });
    this.loadRecipies();
  }
  loadRecipies() {
    this.recipeservice.getAllRecipesP().then((data) => (this.allitems = data));
  }

  deleteRecipeP(recipes: recipe) {
    this.recipeservice.deleteMovie(recipes).then(() => {
      this.loadRecipies(); // Reload movies after deletion
    });
  }
}
