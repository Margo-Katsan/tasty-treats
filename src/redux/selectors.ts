import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = (state: any) => state.recipes.items;

export const selectTotalRecipes = (state: any) => state.recipes.totalRecipes;

export const selectFavorites = (state: any) => state.favorites.items;

export const selectFavoritesCategory = (state: any) => state.favorites.category;

export const selectTotalFavorites = (state: any) => state.favorites.totalFavorites;

export const selectItemOffset = (state: any) => state.favorites.itemOffset;

export const selectPerPage = (state: any) => state.favorites.perPage;

export const selectIsLoading = (state: any) => state.recipes.isLoading;

export const selectError = (state: any) => state.recipes.error;

export const selectFavoritesPerPage = createSelector(
  selectFavorites,
  selectItemOffset,
  selectPerPage,
  selectFavoritesCategory,
  (favorites, itemOffset, perPage, category) => {
    const endOffset = itemOffset + perPage;
    if (category !== '') {
      const visibleFavorites = favorites.filter((favorite: any) => favorite.category === category);
      return visibleFavorites.slice(itemOffset, endOffset);
    }
    return favorites.slice(itemOffset, endOffset);
  }
)

export const selectFavoritesCategories = createSelector(
  selectFavorites,
  (favorites) => {
    const categories: any = [];
    favorites.forEach((favorite: any) => categories.push(favorite.category));
    // @ts-expect-error TS(7006): Parameter 'value' implicitly has an 'any' type.
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

