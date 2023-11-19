import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { selectFavorites } from "redux/selectors";
import { FavoritesMainSection } from "components/favorites/FavoritesMainSection/FavoritesMainSection";
import { FavoritesHero } from "components/favorites/FavoritesHero/FavoritesHero";
import { useEffect, useState } from "react";
const Favorites = () => {
  const windowWidth = useWindowSize().width;
  const favorites = useSelector(selectFavorites);
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  const [isMobile, setIsMobile] = useState(windowWidth < 768 ? true : false);

  useEffect(() => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    setIsMobile(windowWidth < 768 ? true : false) 
  }, [windowWidth])

  return (<div className="container">
      {isMobile && (favorites as any).length === 0 ? (<></>) : (<FavoritesHero />)}
      <FavoritesMainSection />
    </div>);
};

export default Favorites;