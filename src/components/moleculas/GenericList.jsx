import styled from "styled-components";
import { BtnClose, Device } from "../../index";

export function GenericList({ data, setState, action }) {
  function select(p) {
    action(p);
    setState();
  }

  return (
    <Container>
      <section className="content_close">
        <BtnClose action={setState} />
      </section>

      <section className="content_items">
        {data.map((item, index) => (
          <ItemContainer key={index} onClick={() => select(item)}>
            <span>{item.icono}</span>
            <span>{item.descripcion}</span>
          </ItemContainer>
        ))}
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-top: 15px;
  top: 88%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;

  @media ${() => Device.tablet} {
    width: 400px;
  }
`;

const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #303030;
  }
`;
