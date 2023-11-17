import { useState } from "react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useTheme' or its corresp... Remove this comment to see the full error message
import { useTheme } from "hooks/useTheme"
import Switch from "react-switch";
// @ts-expect-error TS(2307): Cannot find module './ThemeSwitcher.module.css' or... Remove this comment to see the full error message
import css from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = ({
  mobileThemeSwitcher
}: any) => {
  
  const { toggleChangeTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('app-theme') === 'dark' ? true : false);

  const handleChangeTheme = (nextChecked: any) => {
    setIsDarkTheme(nextChecked);
    toggleChangeTheme(nextChecked);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`${css.themeSwitcher} ${css[mobileThemeSwitcher]}`}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Switch
        onChange={handleChangeTheme}
        checked={isDarkTheme}
        handleDiameter={18.8}
        height={20}
        width={46}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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