import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { InewRecipe } from '../irecipies';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  allItems: Array<recipe> = [];
  recipeForm!: FormGroup;
  constructor(
    public recipeService: RecipeDataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required]],
      poster: ['', [Validators.required]],
      image: ['', [Validators.required]],
      type: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      link: ['', [Validators.required]],
      procedure: ['', [Validators.required]],
      ingrediants: ['', [Validators.required]],
    });
  }

  addRecipe() {
    if (this.recipeForm.valid) {
      let newRecipe: InewRecipe = this.recipeForm.value;

      this.recipeService.addRecipeP(newRecipe).then(() => {
       
        this.router.navigate(['recipes']);
      });
    }
  }

  // get name() {
  //   return this.movieForm.get('name');
  // }
  // get rating() {
  //   return this.movieForm.get('rating');
  // }
  // get poster() {
  //   return this.movieForm.get('poster');
  // }
  // get trailer() {
  //   return this.movieForm.get('trailer');
  // }
  // get summary() {
  //   return this.movieForm.get('summary');
  // }
}
