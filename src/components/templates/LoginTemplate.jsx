import styled from "styled-components";
import { BtnSave } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <div>
        <span>Versión 1.0.0</span>
        <div>
          <img src="" alt="" />
        </div>
        <Titulo>App Gastos</Titulo>
        <p>Toma el control de tus Gastos e Ingresos</p>
        <ContainerBtn>
          <BtnSave />
          <button>Crear Cuenta</button>
        </ContainerBtn>
      </div>
    </Container>
  );
}
const Container = styled.div``;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
