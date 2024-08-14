import { Component, EventEmitter, Output } from '@angular/core';
import { recipe, RecipeDataService } from '../recipe-data.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, switchMap } from 'rxjs';

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
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  // searchForm!: FormGroup;
  // users: User[] = [];
  // constructor(private fb: FormBuilder, private userService: UserService) {
  //   this.searchForm = this.fb.group({
  //     search: '',
  //   });
  // }

  // ngOnInit() {
  //   this.searchForm
  //     .get('search')
  //     ?.valueChanges.pipe(
  //       debounceTime(300),
  //       switchMap((searchTerm) => this.userService.searchUser(searchTerm))
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.users = data;
  //     });
  // }

  allItems!: Array<recipe>;
  searchForm!: FormGroup;
  // filteredItems: Array<recipe> = [];
  // searchText: string = ' ';

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeDataService
  ) {
    this.searchForm = this.fb.group({
      search: '',
    });
  }

  @Output() filteredItemsChange = new EventEmitter<Array<recipe>>();

  // constructor(private recipeService: RecipeDataService) {
  //   // this.allItems = this.recipeService.recipeData;
  // }
  ngOnInit() {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(300),
        switchMap((searchTerm) => this.recipeService.searchUser(searchTerm))
      )
      .subscribe((data) => {
        console.log(data);
        this.allItems = data;
      });
  }
  // loadRecipies() {
  //   this.recipeService.getAllRecipesP().then((data) => (this.allItems = data));
  // }

  // search() {
  //   this.filteredItems = this.allItems.filter((item) =>
  //     item.name.toLowerCase().includes(this.searchText.toLocaleLowerCase())
  //   );
  //   console.log(this.filteredItems);
  //   this.filteredItemsChange.emit(this.filteredItems);
  // }
}
