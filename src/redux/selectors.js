import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = state => state.recipes.items;

export const selectTotalRecipes = state => state.recipes.totalRecipes;

export const selectFavorites = state => state.favorites.items;

export const selectFavoritesCategory = state => state.favorites.category;

export const selectTotalFavorites = state => state.favorites.totalFavorites;

export const selectItemOffset = state => state.favorites.itemOffset;

export const selectPerPage = state => state.favorites.perPage;

export const selectIsLoading = state => state.recipes.isLoading;

export const selectError = state => state.recipes.error;

export const selectFavoritesPerPage = createSelector(
  selectFavorites,
  selectItemOffset,
  selectPerPage,
  selectFavoritesCategory,
  (favorites, itemOffset, perPage, category) => {
    const endOffset = itemOffset + perPage;
    if (category !== '') {
      const visibleFavorites = favorites.filter(favorite => favorite.category === category);
      return visibleFavorites.slice(itemOffset, endOffset);
    }
    return favorites.slice(itemOffset, endOffset);
  }
)

export const selectFavoritesCategories = createSelector(
  selectFavorites,
  (favorites) => {
    const categories = [];
    favorites.forEach(favorite => categories.push(favorite.category));
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

