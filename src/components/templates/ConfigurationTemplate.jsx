import { useState } from "react";
import styled from "styled-components";
import {
  GenericList,
  Header,
  ListCountries,
  Selector,
  useUserStore,
  TemasData,
  v as variables,
} from "../../index";

export function ConfigurationTemplate() {
  const { dataUsers } = useUserStore();
  const [state, setState] = useState(true);
  const [select, setSelect] = useState([]);
  const [selectTheme, setSelectTheme] = useState([]);
  const [stateCountry, setStateCountry] = useState(false);
  const [stateListThemes, setStateListThemes] = useState(false);

  // país moneda
  const money = select.symbol ? select.symbol : dataUsers.moneda;
  const country = select.countryName ? select.countryName : dataUsers.pais;
  const selectedCountry = `${money} - ${country}`;
  console.log(dataUsers);

  // tema
  const iconoDB = dataUsers.tema === "0" ? "☀️" : "🌙";
  const themeDB = dataUsers.tema === "0" ? "light" : "dark";
  const initialTheme = selectTheme.tema ? selectTheme.tema : themeDB;
  const initialIcon = selectTheme.icono ? selectTheme.icono : iconoDB;
  const selectedTheme = `${initialIcon} ${initialTheme}`;

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
          <Selector
            text1={selectedCountry}
            state={stateCountry}
            color={variables.colorselector}
            action={() => setStateCountry(!stateCountry)}
          />
          {stateCountry && (
            <ListCountries
              setSelect={(p) => setSelect(p)}
              setState={() => setStateCountry(!stateCountry)}
            />
          )}
        </ContentCard>

        {/* theme */}
        <ContentCard>
          <span>Tema:</span>
          <Selector
            text1={selectedTheme}
            color={variables.colorselector}
            state={stateListThemes}
            action={() => setStateListThemes(!stateListThemes)}
          ></Selector>
          {stateListThemes && (
            <GenericList
              data={TemasData}
              setState={() => setStateListThemes(!stateListThemes)}
              action={setSelectTheme}
            />
          )}
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
    flex-direction: column;
    justify-content: start;
    gap: 30px;
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
