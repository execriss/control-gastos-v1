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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    /* Capa inferior: Imagen de fondo */ url(${(props) => props.imgfondo});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255, 0.87);
  text-align: center;

  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    border: 1px solid #272727;
    gap: 30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 1px 18px 3px rgba(25, 36, 37, 0.75);
    animation: pulseShadow 1.5s ease-in-out infinite alternate; /* Ajusta duración (3s), timing y repetición */
    position: relative;
    z-index: 1;

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

  @keyframes pulseShadow {
    0% {
      box-shadow: 8px 5px 18px 3px rgba(25, 36, 37, 0.75);
    }
    50% {
      box-shadow: 8px 5px 25px 6px rgba(25, 36, 37, 0.85);
    }
    100% {
      box-shadow: 8px 5px 18px 3px rgba(25, 36, 37, 0.75);
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
