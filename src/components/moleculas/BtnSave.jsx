import styled from "styled-components";

export function BtnSave({ action, title, bgcolor, icon }) {
  return (
    <Container type="submit">
      <span className="icon">{icon}</span>
      <span className="btn" onClick={action}>
        {title}
      </span>
      <h1>Componente</h1>
    </Container>
  );
}
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
`;
