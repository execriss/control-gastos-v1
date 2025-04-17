import styled from "styled-components";
import { BtnSave, v, useAuthStore } from "../../index";

export function LoginTemplate() {
  const { signInWithGoogle } = useAuthStore();
  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <span className="version">Versión 1.0.0</span>
        <div className="contentImg">
          <img src={v.logo} alt="" />
        </div>
        <Titulo>App Gastos</Titulo>
        <p className="description">Toma el control de tus Gastos e Ingresos</p>
        <ContainerBtn>
          <BtnSave
            title="Iniciar con Google"
            icon={<v.iconogoogle />}
            bgcolor={v.colorSecundario}
            action={signInWithGoogle}
          />
        </ContainerBtn>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${(props) => props.imgfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255, 0.87);
  text-align: center;

  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.75);

    .version {
      color: #727272;
      text-align: start;
    }

    .contentImg {
      img {
        max-width: 60%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }

    .description {
      font-size: 1.2rem;
      color: #909090;
      font-weight: 500;
    }
  }

  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
