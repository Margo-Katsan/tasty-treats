// @ts-expect-error TS(2307): Cannot find module 'components/homeHero/Hero/Hero'... Remove this comment to see the full error message
import { Hero } from "components/homeHero/Hero/Hero";
// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/MainWra... Remove this comment to see the full error message
import { MainWrapper } from "components/homeRecipes/MainWrapper/MainWrapper";
const Home = () => {
  
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Hero />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MainWrapper />
    </>
  )
};

export default Home;