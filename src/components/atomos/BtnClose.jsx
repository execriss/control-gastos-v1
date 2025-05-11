import styled from "styled-components";
import { v as variables } from "../../index";

export function BtnClose({ action }) {
  return (
    <Container className="close" onClick={action}>
      {<variables.iconocerrar />}
    </Container>
  );
}

const Container = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;

  &:hover {
    color: ${() => variables.colorselector};
    transform: scale(1.2);
  }
`;
