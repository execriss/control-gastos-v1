import styled from "styled-components";
import {
  v as variables,
  InputSearchList,
  ConvertirCapitalize,
} from "../../index";
import iso from "iso-country-currency";
import { useState } from "react";

export function ListCountries({ setSelect, setState }) {
  const [dataResult, setDataResult] = useState([]);
  const isoCodes = iso.getAllISOCodes();

  const searchCountry = (e) => {
    let filtered = isoCodes.filter(
      (item) => item.countryName == ConvertirCapitalize(e.target.value)
    );
    setDataResult(filtered);
  };

  const selectCountry = (param) => {
    setSelect(param);
    setState();
  };

  return (
    <Container>
      <header className="header">
        <span>Buscá tu país</span>
        <span className="close" onClick={setState}>
          {<variables.iconocerrar />}
        </span>
      </header>
      <InputSearchList placeholder="Buscar..." onChange={searchCountry} />
      {dataResult.length > 0 &&
        dataResult.map((item, index) => (
          <ItemContainer key={index} onClick={() => selectCountry(item)}>
            <span>{item.countryName}</span>
            <span>{item.symbol}</span>
          </ItemContainer>
        ))}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;

    .close {
      cursor: pointer;
      font-size: 25px;
      transition: all 0.2s;

      &:hover {
        color: ${() => variables.colorselector};
        transform: scale(1.2);
      }
    }
  }
`;
const ItemContainer = styled.section`
  gap: 10px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #303030;
  }
`;
