import css from './LabelName.module.css';

export const LabelName = ({ name }) => {
  return (
    <span className={css.title}>{name}</span>
 )
}