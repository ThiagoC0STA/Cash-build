import styled from "styled-components";

export const HeaderComponent = styled.header`
  background: transparent;
  margin: 3vh 6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.4rem;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
    z-index: 999;
  }

  .selected {
    font-weight: 600;
  }

  div,
  img {
    z-index: 999;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 48px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 22px;
    color: #ffffff;

    a:last-child {
      font-size: 0.9rem;
      display: flex;
      color: #ffffff;
      gap: 10px;
      align-items: center;
      padding: 6px 12px;
      background-color: #119944;
      border: none;
      border-radius: 7px;
    }
  }

  .mobileNav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 55vw;
    height: 100vh;
    background-color: #000d23;
    box-shadow: 0 0 5px #000;
    transition: all ease 0.4s;

    nav {
      flex-direction: column;
      color: #fff !important;
    }

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
    }
  }
`;
