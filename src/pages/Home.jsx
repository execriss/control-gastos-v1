import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";

export function Home() {
  const { user } = UserAuth();
  const { signOut } = useAuthStore();

  return (
    <Container>
      <h1>Bienvenido {user.full_name}</h1>
      <img src={user.picture} alt="Avatar" />
      <button onClick={signOut}>Cerrar</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
