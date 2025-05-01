import styled from "styled-components";
import {
  UserAuth,
  BtnCircular,
  v as variables,
  ListaMenuDesplegable,
  DesplegableUser,
  useAuthStore,
} from "../../index";

export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signOut } = useAuthStore();

  const functionForType = async (type) => {
    if (type === "cerrarsesion") {
      await signOut();
    }
  };

  return (
    <Container onClick={stateConfig.setState}>
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
        translateX="-54px"
        translateY="-20px"
      />
      <span className="name">{user.name}</span>

      {!stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          functionType={(type) => functionForType(type)}
          top="62px"
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;

  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }

  .name {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
