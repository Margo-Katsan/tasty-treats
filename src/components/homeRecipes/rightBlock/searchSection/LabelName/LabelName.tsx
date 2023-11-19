import css from './LabelName.module.css';

export const LabelName = ({
  name
}: any) => {
  return (
    <span className={css.title}>{name}</span>
 )
}