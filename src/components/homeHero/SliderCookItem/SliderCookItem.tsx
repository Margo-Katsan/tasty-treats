import css from './SliderCookItem.module.css';

export const SliderCookItem = ({cook}) => {
  return (
    <div className={css.wrapper}>
      <img className={css.cook} src={cook.imgUrl} loading="lazy" width="412" alt={cook.name}/>
    </div>
  )
}