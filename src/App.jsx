import React, { createContext, useState } from "react";
import { AuthContextProvider, MyRoutes } from "./index";
import { Light, Dark } from "./index";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      {/* provider theme */}
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          {/* provider session */}
          <AuthContextProvider>
            {/* routes */}
            <MyRoutes />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
