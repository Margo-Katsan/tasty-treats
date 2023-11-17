import { Title } from "../Title/Title";
import { Slider } from "../Slider/Slider";
import { Button } from "../Button/Button";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`${css.hero}`}>
      <div className={`${css.container} container`}>
        <div className={css.mainWrapper}>
          <div className={css.wrapper}>
          <Title />
          <p className={css.desc}>TastyTreats - Customize Your Meal with Ingredient Options and Step-by-Step Video Guides. </p>
          <Button />
        </div>
        <Slider />
        </div>
        
      </div>
    </section>
  )
}