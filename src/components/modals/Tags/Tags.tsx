import css from './Tags.module.css';

export const Tags = ({ tags }) => {
  return (
    <ul className={css.list}>
      {tags.map((tag, index) => {
        return tag !== '' && (<li className={css.item} key={index}>#{tag}</li>)
      })}
    </ul>
  )
}