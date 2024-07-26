import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RecipeDataService } from '../recipe-data.service';


@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,AppComponent,MatIconModule,MatBadgeModule],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.scss'
})
export class RecipecardComponent {
  constructor(recipeData : RecipeDataService){

  }
  like : number = 0
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
