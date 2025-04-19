import React, { createContext, useState } from "react";
import {
  AuthContextProvider,
  MyRoutes,
  Sidebar,
  Device,
  Light,
  Dark,
} from "./index";
import styled, { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      {/* provider theme */}
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          {/* provider session */}
          <AuthContextProvider>
            <Container>
              {/* sidebar */}
              <Sidebar />
              {/* routes */}
              <ContainerBody>
                <MyRoutes />
              </ContainerBody>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  /* saliendo del modo mobile */
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
  }
`;

const ContainerBody = styled.div`
  grid-column: 1;
  width: 100%;

  /* saliendo del modo mobile */
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
