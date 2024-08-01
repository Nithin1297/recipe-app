export interface Irecipies {
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
export type InewRecipe = Omit<Irecipies, 'id'>;
