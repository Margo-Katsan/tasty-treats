import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectRecipes = (state: RootState) => state.recipes.items;

export const selectTotalRecipes = (state: RootState) => state.recipes.totalRecipes;

export const selectTotalRecipesPages = (state: RootState) => state.recipes.totalRecipesPages;

export const selectFavorites = (state: RootState ) => state.favorites.items;

export const selectFavoritesCategory = (state: RootState ) => state.favorites.category;

export const selectTotalFavorites = (state: RootState ) => state.favorites.totalFavorites;

export const selectItemOffset = (state: RootState ) => state.favorites.itemOffset;

export const selectPerPage = (state: RootState ) => state.favorites.perPage;

export const selectIsLoading = (state: RootState ) => state.recipes.isLoading;

export const selectError = (state: RootState ) => state.recipes.error;

export const selectFavoritesPerPage = createSelector(
  selectFavorites,
  selectItemOffset,
  selectPerPage,
  selectFavoritesCategory,
  (favorites, itemOffset, perPage, category) => {
    const endOffset = itemOffset + perPage;
    if (category !== '') {
      const visibleFavorites = favorites.filter((favorite) => favorite.category === category);
      return visibleFavorites.slice(itemOffset, endOffset);
    }
    return favorites.slice(itemOffset, endOffset);
  }
)

export const selectFavoritesCategories = createSelector(
  selectFavorites,
  (favorites) => {
    const categories: string[] = [];
    favorites.forEach((favorite) => categories.push(favorite.category));
    const categoriesWithoutDublicates = categories.filter((value, index, self) => self.indexOf(value) === index);
    return categoriesWithoutDublicates;
  }
)
export const selectShowPagination = createSelector(
  selectPerPage,
  selectTotalFavorites,
  (perPage, totalFavorites) => {
    return perPage >= totalFavorites ? false : true;
  }
 )

