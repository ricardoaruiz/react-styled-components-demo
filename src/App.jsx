import React, { useState, useEffect } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import Themes from "./themes/themes";

import Button from "./components/button/Button";

const App = () => {
  const [themePosition, setThemePosition] = useState(1);
  const [theme, setTheme] = useState(Themes[themePosition]);

  useEffect(() => {
    setTheme(Themes[themePosition]);
  }, [themePosition]);

  const changeTheme = () => {
    setThemePosition(themePosition === 0 ? 1 : 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Buttons</p>
        <Button id="b1" label="Default" onClick={changeTheme} />
        <Button id="b2" label="Primary" primary onClick={changeTheme} />
        <Button id="b3" label="Success" success onClick={changeTheme} />
        <Button id="b4" label="Danger" danger onClick={changeTheme} />
        <Button id="b5" label="Warn" warn onClick={changeTheme} />
        <Button id="b6" label="Disabled" warn disabled onClick={changeTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
