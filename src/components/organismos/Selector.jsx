import styled from "styled-components";
import { v as variables } from "../../index";

export function Selector({ color, state, action, text1, text2 }) {
  return (
    <Container color={color} onClick={action}>
      <div>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <span className={state ? "open" : "close"}>
        {<variables.iconoFlechabajo />}
      </span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${({ color }) => color};
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  font-weight: 600;

  .open {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  .close {
    transition: 0.3s;
    transform: rotate(180deg);
  }

  &:hover {
    background-color: ${({ color }) => color};
    color: #000;
  }
`;
