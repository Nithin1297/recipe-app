import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AppComponent,
    MatIconModule,
    MatBadgeModule,
    RouterLink
  ],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.scss',
})
export class RecipecardComponent {
  constructor(public recepinfo: RecipeDataService, private router: Router) {}
  @Input() id!: string;

  @Output() deleteRecipeEvent: EventEmitter<recipe> = new EventEmitter<recipe>();
 

  openRecipeOverview() {
    this.router.navigate(['/overview', this.item.id]);
  }

  deleteRecipeItem(){
    this.deleteRecipeEvent.emit(this.item);
  }
  
  
  @Input() item = {
    id : '',
    name: 'Chicken Biriyani',
    poster:
      'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/4:3/w_5100,h_3825,c_limit/RoastChicken_RECIPE_080420_37993.jpg',
    image:
      'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
    type: 'Non-Veg',
    duration: '55 Minnutes',
    link:
      'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    procedure:
      'Marinate chicken with yogurt, ginger, garlic, and spices. Cook with ground masala and rice.',
    ingrediants:
      'Chicken, basmati rice, yogurt, ginger, garlic, onions, ghee, cooking oil, spices',
  };

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  like = 0;
  likeIncreament() {
    this.like += 1;
  }
}
