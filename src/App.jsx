import { createContext, useState } from "react";
import {
  AuthContextProvider,
  MyRoutes,
  Sidebar,
  Device,
  Light,
  Dark,
  MenuBurguer,
  useUserStore,
} from "./index";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);

function App() {
  const { pathname } = useLocation();
  const { getUsers } = useUserStore();
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const themeStyle = theme === "light" ? Light : Dark;

  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => getUsers(),
  });

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <>
      {/* provider theme */}
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          {/* provider session */}
          {isLoading ? (
            <LoadingOverlay>
              <Spinner />
            </LoadingOverlay>
          ) : (
            <AuthContextProvider>
              {pathname !== "/login" ? (
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
              ) : (
                <MyRoutes />
              )}

              <ReactQueryDevtools initialIsOpen={true} />
            </AuthContextProvider>
          )}
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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.bg};
  border-top: 5px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export default App;
