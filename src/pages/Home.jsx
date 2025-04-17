import styled from "styled-components";
import { useAuthStore } from "../store/AuthStore";

export function Home() {
  const { signOut } = useAuthStore();

  return (
    <Container>
      <h1>Home</h1>
      <button onClick={signOut}>Cerrar</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
