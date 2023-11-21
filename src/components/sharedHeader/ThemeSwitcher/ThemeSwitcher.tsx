import { useState, FC } from "react";
import { useTheme } from "hooks/useTheme"
import Switch from "react-switch";
import { IconThemeSwitch } from "../IconThemeSwitch/IconThemeSwitch";
import css from "./ThemeSwitcher.module.css"

interface IThemeSwitcherProps {
  mobileThemeSwitcher?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({mobileThemeSwitcher}) => {

  const { toggleChangeTheme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem('app-theme') === 'dark' ? true : false);

  const handleChangeTheme = (nextChecked: boolean) => {
    setIsDarkTheme(nextChecked);
    toggleChangeTheme(nextChecked);
  };

  return (
    <div className={`${css.themeSwitcher} ${css[mobileThemeSwitcher as string]}`}>
      <Switch
        onChange={handleChangeTheme}
        checked={isDarkTheme}
        handleDiameter={18.8}
        height={20}
        width={46}
        uncheckedIcon={<IconThemeSwitch classNameIcon="uncheckedIcon"/>}
        checkedIcon={false}
        checkedHandleIcon={<IconThemeSwitch classNameIcon="checkedHandleIcon"/>}
        activeBoxShadow="4px 4px 15px 0px rgba(243, 243, 243, 0.25)"
        offColor="#CECDCD"
        onColor="#9BB537"
        offHandleColor="#F8F8F8"
        onHandleColor="#F3F3F3"
      />
    </div>
  )
}