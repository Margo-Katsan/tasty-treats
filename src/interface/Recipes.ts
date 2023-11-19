import { IDetailedRecipeData } from "./DetailedRecipeData";

export interface IRecipes {
  page: string;
  perPage: string;
  results: IDetailedRecipeData[];
  totalPages: number
}