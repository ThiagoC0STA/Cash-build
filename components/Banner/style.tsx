import styled from "styled-components";

export const BannerElement = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background: transparent;
    padding: 12px 24px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    margin-top: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    margin-top: 20px;
  }

  h2,
  p,
  button {
    color: #fff;
  }

  @media (max-width: 1150px) {
    height: 330px;

    button {
      font-size: 0.9rem;
      padding: 8px 20px;
    }

    h2 {
      font-size: 1.9em;
    }
  }

  @media (max-width: 1150px) {
    height: 280px;
  }

  @media (max-width: 600px) {
    height: 250px;

    button {
      font-size: 0.7rem;
      padding: 4px 18px;
    }

    h2 {
      font-size: 1.7em;
    }
  }

  @media (max-width: 490px) {
    height: 230px;

    button {
      font-size: 0.6rem;
      padding: 2px 18px;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 420px) {
    height: 220px;

    button {
      font-size: 0.6rem;
      padding: 0 15px;
    }

    h2 {
      font-size: 1.3em;
    }
  }

  @media (max-width: 370px) {
    h2 {
      font-size: 1.15em;
    }
  }
`;
