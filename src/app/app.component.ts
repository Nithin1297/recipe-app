import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipecardComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
