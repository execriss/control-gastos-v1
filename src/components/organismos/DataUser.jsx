import styled from "styled-components";
import { UserAuth, BtnCircular, v as variables } from "../../index";

export function DataUser() {
  const { user } = UserAuth();

  return (
    <Container>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
      <BtnCircular
        icon={<variables.iconocorona />}
        width="25px"
        height="25px"
        bgcolor="#fff"
        textColor="#181616"
        fontsize="11px"
      />
    </Container>
  );
}
const Container = styled.div``;
