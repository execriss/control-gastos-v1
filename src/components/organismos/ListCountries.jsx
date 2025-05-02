import styled from "styled-components";
import { v as variables, InputSearchList } from "../../index";

export function ListCountries({ setSelect, setState }) {
  return (
    <Container>
      <header className="header">
        <span>Buscá tu país</span>
        <span className="close" onClick={setState}>
          {<variables.iconocerrar />}
        </span>
      </header>
      <InputSearchList placeholder="Buscar..." />
    </Container>
  );
}
const Container = styled.div``;
