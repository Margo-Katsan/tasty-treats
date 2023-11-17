import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { selectFavorites } from "redux/selectors";
import { FavoritesMainSection } from "components/favorites/FavoritesMainSection/FavoritesMainSection";
import { FavoritesHero } from "components/favorites/FavoritesHero/FavoritesHero";
import { useEffect, useState } from "react";
const Favorites = () => {
  const windowWidth = useWindowSize().width;
  const favorites = useSelector(selectFavorites);
  const [isMobile, setIsMobile] = useState(windowWidth < 768 ? true : false);

  useEffect(() => {
    setIsMobile(windowWidth < 768 ? true : false) 
  }, [windowWidth])

  return (
    <div className="container">
      {isMobile && favorites.length === 0 ? (
<></>
      ) : (
          <FavoritesHero />
      )}
      
      <FavoritesMainSection />
    </div>
  )
};

export default Favorites;