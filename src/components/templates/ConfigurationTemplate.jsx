import styled from "styled-components";

export function ConfigurationTemplate() {
  console.log();

  return (
    <Container>
      {/* Header */}
      <header className="header" />

      {/* Area 1 */}
      <section className="area1"></section>

      {/* Area 2 */}
      <section className="area2"></section>

      {/* main */}
      <section className="main"></section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    background: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }

  .area1 {
    grid-area: area1;
    background: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    background: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }

  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
