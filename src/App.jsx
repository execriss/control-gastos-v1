import React, { createContext, useState } from "react";
import { AuthContextProvider, MyRoutes, Sidebar } from "./index";
import { Light, Dark } from "./index";
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
  grid-template-columns: 65px 1fr;
`;

const ContainerBody = styled.div`
  grid-column: 2;
  width: 100%;
`;

export default App;
