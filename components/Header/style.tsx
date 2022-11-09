import styled from "styled-components";

export const HeaderComponent = styled.header`
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
  background: transparent;
  margin: 3vh 6.25vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.4rem;
    color: #fff;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
  }

  nav {
    display: flex;
    gap: 48px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 22px;
    color: #ffffff;
  }
`;
