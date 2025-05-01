import styled from "styled-components";
import { ItemDesplegable, v as variables } from "../../index";
// import ItemDeplegable from "../../index";
export function ListaMenuDesplegable({ data, top }) {
  return (
    <Container top={top}>
      {data.map((item, index) => (
        <ItemDesplegable key={index} item={item} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${({ top }) => top};
  box-shadow: ${() => variables.boxshadowGray};
`;
