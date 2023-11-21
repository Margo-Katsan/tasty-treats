import { FC } from "react";
import css from "./IconThemeSwitch.module.css"

interface IIconThemeSwitchProps {
  classNameIcon: string
}

export const IconThemeSwitch: FC<IIconThemeSwitchProps> = ({classNameIcon}) => {
  return <div className={css[classNameIcon]}></div>
}