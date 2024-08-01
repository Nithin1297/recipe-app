// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { Router } from '@angular/router';
// import { recipe, RecipeDataService } from '../recipe-data.service';

// @Component({
//   selector: 'app-add-recipe',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule,
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,],
//   templateUrl: './add-recipe.component.html',
//   styleUrl: './add-recipe.component.scss'
// })
// export class AddRecipeComponent {
//   allItems: Array<recipe> = [];
//   recipeForm!: FormGroup;
//   constructor(
//     public recipeService: RecipeDataService,
//     private router: Router,
//     private fb: FormBuilder,
//   ) {}
// }





 

// export class AddMovieComponent {
//   // @Input() movieList: Array<IMovie> = [];
 
  
 
//   constructor(
//     public movieService: MovieService,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.movieList = this.movieService.getMovieList();
 
//     // formGroup -> formControlName
//     this.movieForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(2)]],
//       poster: ['',[Validators.required]],
//       rating: [
//         '',
//         [Validators.required, Validators.min(1), Validators.max(10)],
//       ],
//       summary: ['',[Validators.required,Validators.minLength(20)]],
//       trailer: ['',[Validators.required]],
//     });
//   }
 
//   addMovie() {
//     console.log(this.movieForm.value);
//     // Todo: Fix Add - Technical Debt
 
//     if (this.movieForm.valid) {
//       let newMovie: NewMovie = this.movieForm.value;
 
//       this.movieService.addMovie(newMovie).then(() => {
//         // Move to movies page
//         this.router.navigate(['movies']);
//       });
//     }
//   }
 
//   // getter
//   get name() {
//     return this.movieForm.get('name');
//   }
//   get rating() {
//     return this.movieForm.get('rating');
//   }
//   get poster() {
//     return this.movieForm.get('poster');
//   }
//   get trailer() {
//     return this.movieForm.get('trailer');
//   }
//   get summary() {
//     return this.movieForm.get('summary');
//   }
// }