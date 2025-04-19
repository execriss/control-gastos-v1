import styled from "styled-components";
import { LinksArray, v } from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
  return (
    <Main>
      <Container isOpen={state}>
        <div className="LogoContent">
          <div className="ImgContent">
            <img src={v.logo} alt="logo" />
          </div>
          <h2>Codexia</h2>
        </div>

        {LinksArray.map(({ icon, label, to }) => (
          <div
            key={label}
            className={state ? "LinkContainer active" : "LinkContainer"}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="LinkIcon">{icon}</div>
              <span>{label}</span>
            </NavLink>
          </div>
        ))}

        <Divider />
      </Container>
    </Main>
  );
}
const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;

  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .ImgContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)}
        rotate(${({ theme }) => theme.logorotate});

      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }

    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }

  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${({ theme }) => theme.bgAlpha};
    }
  }

  .Links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${() => v.smSpacing} - 2px) 0;
    color: ${({ theme }) => theme.text};
    height: 60px;

    .LinkIcon {
      padding: ${() => v.smSpacing} ${() => v.mdSpacing};
      display: flex;

      svg {
        font-size: 25px;
      }
    }

    &.active {
      color: ${({ theme }) => theme.bg5};
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        background: ${({ theme }) => theme.bg5};
        width: 4px;
        border-radius: 10px;
        left: 0;
      }
    }
  }
`;

const Main = styled.div``;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
