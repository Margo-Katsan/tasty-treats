// @ts-expect-error TS(2307): Cannot find module './FavoritesHero.module.css' or... Remove this comment to see the full error message
import css from './FavoritesHero.module.css'
export const FavoritesHero = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section className={css.hero}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h1 className='visually-hidden'>
        favorites
      </h1>
    </section>
  )
}