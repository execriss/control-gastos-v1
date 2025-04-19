import React, { createContext, useState } from "react";
import {
  AuthContextProvider,
  MyRoutes,
  Sidebar,
  Device,
  Light,
  Dark,
  MenuBurguer,
} from "./index";
import styled, { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      {/* provider theme */}
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          {/* provider session */}
          <AuthContextProvider>
            <Container className={sidebarOpen ? "active" : ""}>
              {/* sidebar */}
              <div className="ContentSidebar">
                <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
              </div>

              {/* menu burger */}
              <div className="ContentMenuBurguer">
                <MenuBurguer />
              </div>

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
  background: ${({ theme }) => theme.bgotal};
  transition: 0.3s ease-in-out;

  /* ocultar sidebar en mobile */
  .ContentSidebar {
    display: none;
  }

  .ContentMenuBurguer {
    display: block;
    position: absolute;
    left: 20px;
  }
  /* saliendo del modo mobile */
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;

    /* aumenta segun este abierto o cerrado el sidebar */
    &.active {
      grid-template-columns: 220px 1fr;
    }

    /* se muestra el sidebar fuera de mobile */
    .ContentSidebar {
      display: initial;
    }

    /* se oculta el menu burger fuera de mobile */
    .ContentMenuBurguer {
      display: none;
    }
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
