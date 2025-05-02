import { useState } from "react";
import styled from "styled-components";
import { Header, ListCountries, Selector, v as variables } from "../../index";

export function ConfigurationTemplate() {
  const [state, setState] = useState(true);
  const [stateCountry, setStateCountry] = useState(true);

  return (
    <Container>
      {/* Header */}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      {/* Area 1 */}
      <section className="area1">
        <h1>Ajustes</h1>
      </section>

      {/* Area 2 */}
      <section className="area2">
        <ContentCard>
          <span>Moneda</span>
          <Selector state={stateCountry} color={variables.colorselector} />
          <ListCountries />
        </ContentCard>
      </section>

      {/* main */}
      <section className="main"></section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    background: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }

  .area1 {
    grid-area: area1;
    background: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    background: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }

  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
`;
