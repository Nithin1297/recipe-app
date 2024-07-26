import { Injectable } from '@angular/core';


type recipe = {
itemTitle : string;
itemposter : string;
itemImage : string;
itemType : string;
itemDuration : string;
itemLink : string;
itemProcedure : string;
itemIngredients : string;

}

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {


  recipeData : Array<recipe> = [
    {
      itemTitle : "Chicken Biriyani",
      itemposter :"https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/4:3/w_5100,h_3825,c_limit/RoastChicken_RECIPE_080420_37993.jpg",
      itemImage : "https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg",
      itemType : "Non-Veg",
      itemDuration : "55 Minnutes",
      itemLink : "https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats",
      itemProcedure :  "Marinate chicken with yogurt, ginger, garlic, and spices. Cook with ground masala and rice.",
      itemIngredients : "Chicken, basmati rice, yogurt, ginger, garlic, onions, ghee, cooking oil, spices",
    }
  ]

  constructor() { }
}
