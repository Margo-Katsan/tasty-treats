export interface IIngredientDetailedRecipeData {
  desc: string
  _id: string
  img: string
  measure: string
  name: string
}
export interface IDetailedRecipeData {
  area: string;
  category: string;
  description: string;
  ingredients: IIngredientDetailedRecipeData[];
  instructions: string;
  preview: string;
  rating: number;
  tags: string[];
  thumb: string;
  time: string;
  title: string;
  whoRated: number;
  youtube: string;
  _id: string;
}