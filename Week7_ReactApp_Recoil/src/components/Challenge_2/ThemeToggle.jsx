import React from "react";
import { useRecoilState } from "recoil";
import themeState from "../../global_states/themeState";
import "./ThemeToggle.css";

function ThemeToggle() {
  let [theme, setTheme] = useRecoilState(themeState);

  return (
    <div className={`theme-toggle ${theme}`}>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Change theme
      </button>
    </div>
  );
}

export default ThemeToggle;
