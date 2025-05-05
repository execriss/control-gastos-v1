import styled from "styled-components";
import {
  LinksArray,
  v,
  SecondarylinksArray,
  SidebarCard,
} from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
  return (
    <Main isOpen={state}>
      <span className="SiderButton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>
      <Container isOpen={state} className={state ? "active" : ""}>
        <div className="LogoContent">
          <div className="ImgContent">
            <img src={v.logo} alt="logo" />
          </div>
          {/* <h2>Gastin</h2> */}
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
              {state && <span>{label}</span>}
            </NavLink>
          </div>
        ))}

        <Divider />

        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            key={label}
            className={state ? "LinkContainer active" : "LinkContainer"}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="LinkIcon">{icon}</div>
              {state && <span>{label}</span>}
            </NavLink>
          </div>
        ))}

        <Divider />
        {state && <SidebarCard />}
      </Container>
    </Main>
  );
}
const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bg};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }

  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 24px 0;

    .ImgContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ isOpen }) => (isOpen ? `scale(2)` : `scale(1.5)`)}
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
  }
`;

const Main = styled.div`
  .SiderButton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bgtgderecha};
    color: ${({ theme }) => theme.text};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
