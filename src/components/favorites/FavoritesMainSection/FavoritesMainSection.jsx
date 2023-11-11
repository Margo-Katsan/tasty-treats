import { FavoritesFilter } from "../FavoritesFilter/FavoritesFilter"
import { FavoritesList } from "../FavoritesList/FavoritesList"
import { FavoritesPagination } from "../FavoritesPagination/FavoritesPagination"
export const FavoritesMainSection = () => {
  
  return (
    <section>
      <h2></h2>
      <FavoritesFilter />
      <FavoritesList />
      <FavoritesPagination />
    </section>
  )
}