import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,AppComponent],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.scss'
})
export class RecipecardComponent {

}
