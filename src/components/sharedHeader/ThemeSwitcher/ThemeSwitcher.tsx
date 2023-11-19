import { useState } from "react";
import { useTheme } from "hooks/useTheme"
import Switch from "react-switch";
import css from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = ({mobileThemeSwitcher}: any) => {
  
  const { toggleChangeTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem('app-theme') === 'dark' ? true : false);

  const handleChangeTheme = (nextChecked: boolean) => {
    setIsDarkTheme(nextChecked);
    toggleChangeTheme(nextChecked);
  };

  return (
    <div className={`${css.themeSwitcher} ${css[mobileThemeSwitcher]}`}>
      <Switch
        onChange={handleChangeTheme}
        checked={isDarkTheme}
        handleDiameter={18.8}
        height={20}
        width={46}
        uncheckedIcon={<div
          style={{
            position: "absolute",
            left: "-18.4px",
          width: "46px",
            height: "100%",
          borderRadius: "10px",
          boxShadow: "7px 5px 15px 0px rgba(160, 158, 160, 0.60)"
        }}
      ></div>}
        checkedIcon={false}
        checkedHandleIcon={<div
          style={{
          width: "100%",
            height: "100%",
          borderRadius: "50%",
          boxShadow: "4px 4px 15px 0px rgba(243, 243, 243, 0.25)"
        }}
      ></div>}
        activeBoxShadow="4px 4px 15px 0px rgba(243, 243, 243, 0.25)"
        offColor="#CECDCD"
        onColor="#9BB537"
        offHandleColor="#F8F8F8"
        onHandleColor="#F3F3F3"
        
        
      />
    </div>
  )
}