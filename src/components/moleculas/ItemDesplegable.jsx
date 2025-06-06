import styled from "styled-components";
import { Icon } from "../../index";

export function ItemDesplegable({ item, functionType }) {
  return (
    <Container onClick={functionType}>
      <Icon>{item.icono}</Icon>
      <span>{item.text}</span>
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    font-size: 28px;
    display: block;
  }
`;
