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
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
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
      name: ['', [Validators.required,Validators.minLength(2)]],
      poster: ['', [Validators.required, Validators.pattern(/^https:\/\/.*/)]],
      image: ['', [Validators.required, Validators.pattern(/^https:\/\/.*/)]],
      type: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.pattern(/^https:\/\/.*/)]],
      procedure: ['', [Validators.required,Validators.minLength(20)]],
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

  get name() {
    return this.recipeForm.get('name');
  }
  get poster() {
    return this.recipeForm.get('poster');
  }
  get image() {
    return this.recipeForm.get('image');
  }
  get type() {
    return this.recipeForm.get('type');
  }
  get duration() {
    return this.recipeForm.get('duration');
  }
  get link() {
    return this.recipeForm.get('link');
  }
  get procedure() {
    return this.recipeForm.get('procedure');
  }
  get ingrediants() {
    return this.recipeForm.get('ingrediants');
  }
}
