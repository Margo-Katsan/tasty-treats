// @ts-expect-error TS(6142): Module '../Title/Title' was resolved to 'C:/Users/... Remove this comment to see the full error message
import { Title } from "../Title/Title";
// @ts-expect-error TS(6142): Module '../Slider/Slider' was resolved to 'C:/User... Remove this comment to see the full error message
import { Slider } from "../Slider/Slider";
// @ts-expect-error TS(6142): Module '../Button/Button' was resolved to 'C:/User... Remove this comment to see the full error message
import { Button } from "../Button/Button";
// @ts-expect-error TS(2307): Cannot find module './Hero.module.css' or its corr... Remove this comment to see the full error message
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section className={`${css.hero}`}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={`${css.container} container`}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className={css.mainWrapper}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className={css.wrapper}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Title />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className={css.desc}>TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides. </p>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button />
        </div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Slider />
        </div>
        
      </div>
    </section>
  )
}