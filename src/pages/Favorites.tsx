import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectFavorites } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module 'components/favorites/Favorites... Remove this comment to see the full error message
import { FavoritesMainSection } from "components/favorites/FavoritesMainSection/FavoritesMainSection";
// @ts-expect-error TS(2307): Cannot find module 'components/favorites/Favorites... Remove this comment to see the full error message
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

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<div className="container">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {isMobile && (favorites as any).length === 0 ? (<></>) : (<FavoritesHero />)}
      
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FavoritesMainSection />
    </div>);
};

export default Favorites;