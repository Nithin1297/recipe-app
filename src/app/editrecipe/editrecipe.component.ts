import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-editrecipe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: './editrecipe.component.html',
  styleUrl: './editrecipe.component.scss',
})
export class EditrecipeComponent {
  recipeForm: FormGroup;
  recipeId: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipeService: RecipeDataService,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      // name: ['', [Validators.required]],
      // poster: ['', [Validators.required]],
      // image: ['', [Validators.required]],
      // // summary: ['',[Validators.required]],
      // // trailer: ['',[Validators.required]],
      name: ['', [Validators.required]],
      poster: ['', [Validators.required]],
      image: ['', [Validators.required]],
      type: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      link: ['', [Validators.required]],
      procedure: ['', [Validators.required]],
      ingrediants: ['', [Validators.required]],
    });

    this.recipeId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    if (this.recipeId) {
      this.recipeService.getRecipeByIdP(this.recipeId).then((recipe) => {
        this.recipeForm.patchValue(recipe);
      });
    }
  }

  editrecipe() {
    if (this.recipeForm.valid) {
      let reciteItem: recipe = {
        id: this.recipeId,
        ...this.recipeForm.value,
      };

      this.recipeService.editrecipeItem(reciteItem).then(() => {
        this.router.navigate(['/recipes']);
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
