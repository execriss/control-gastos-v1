import styled from "styled-components";
import { ConfigurationTemplate } from "../components/templates/ConfigurationTemplate";

export function Configuration() {
  console.log();

  return (
    <Container>
      <ConfigurationTemplate />
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
`;
