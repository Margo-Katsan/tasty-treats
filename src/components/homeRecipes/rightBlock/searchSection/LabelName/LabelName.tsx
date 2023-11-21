import {FC} from "react"
import css from './LabelName.module.css';

interface ILabelNameProps {
  name: string
}

export const LabelName: FC<ILabelNameProps> = ({ name }) => {
  return (
    <span className={css.title}>{name}</span>
 )
}