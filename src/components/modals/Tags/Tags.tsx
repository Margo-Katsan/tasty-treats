import { FC } from "react";
import css from './Tags.module.css';

interface ITagsProps {
  tags: string[];
}

export const Tags: FC<ITagsProps> = ({ tags }) => {

  return (
    <ul className={css.list}>
      {tags.map((tag, index) => {
        return tag !== '' && (<li className={css.item} key={index}>#{tag}</li>)
      })}
    </ul>
  );
}