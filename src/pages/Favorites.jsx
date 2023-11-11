import { FavoritesMainSection } from "components/favorites/FavoritesMainSection/FavoritesMainSection";
import { FavoritesHero } from "components/favorites/FavoritesHero/FavoritesHero";
const Favorites = () => {
  
  return (
    <div className="container">
      <FavoritesHero />
      <FavoritesMainSection />
    </div>
  )
};

export default Favorites;