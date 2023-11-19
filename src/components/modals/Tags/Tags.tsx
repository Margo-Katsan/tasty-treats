import css from './Tags.module.css';

export const Tags = ({
  tags
}: any) => {
  return (
    <ul className={css.list}>
      {tags.map((tag: any, index: any) => {
        return tag !== '' && (<li className={css.item} key={index}>#{tag}</li>)
      })}
    </ul>
  );
}