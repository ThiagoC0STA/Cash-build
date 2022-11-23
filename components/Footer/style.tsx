import styled from "styled-components";

export const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.25vw;

  background: #f3f3f3;
  height: 120px;

  button {
    width: 3rem;
    height: 3rem;
    background: #edeff6;
    border-radius: 4px;
    border: none;
    transition: all ease 0.4s;

    :hover {
      background: #d3d9f1;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  p {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 32px;
    color: #000000;
  }

  @media (max-width: 730px) {
    height: 80px;

    p {
      font-size: 0.7rem;
    }

    button {
      width: 1.7rem;
      height: 1.7rem;

      img {
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }

  @media (max-width: 420px) {
    padding: 0 4vw;
    height: 70px;
  }

  @media (max-width: 400px) {    
    height: 60px;

    p {
      font-size: 0.55rem;
    }

    button {
      width: 1.65rem;
      height: 1.65rem;

      img {
        width: 0.65rem;
        height: 0.65rem;
      }
    }
  }

  @media (max-width: 330px) {    
    height: 60px;

    p {
      font-size: 0.5rem;
    }

    button {
      width: 1.6rem;
      height: 1.6rem;

      img {
        width: 0.65rem;
        height: 0.65rem;
      }
    }
  }
`;
