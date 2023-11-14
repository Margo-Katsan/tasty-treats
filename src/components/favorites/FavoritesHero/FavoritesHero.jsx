import css from './FavoritesHero.module.css'
export const FavoritesHero = () => {
  return (
    <section className={css.hero}>
      <h1 className='visually-hidden'>
        favorites
      </h1>
    </section>
  )
}