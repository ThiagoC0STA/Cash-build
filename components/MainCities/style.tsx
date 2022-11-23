import styled from "styled-components";

export const CitiesSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 18.5vh;
  width: 100%;

  p {
    margin: 24px 0 45px 0;
  }

  .container {
    width: 100%;
    padding: 0 15.2vw;
  }

  @media (max-width: 1000px) {
    margin-top: 14vh;
  }

  @media (max-width: 600px) {
    margin-top: 10vh;

    .slick-dots li button:before {
      font-size: 5px;
    }
  }

  @media (max-width: 590px) {
    .container {
      padding: 0 12vw;
    }
  }

  @media (max-width: 440px) {
    .container {
      padding: 0 10.5vw;
    }

    .slick-dots li button:before {
      font-size: 4px;
    }
  }
`;

export const CitiesDiv = styled.div`
  margin-bottom: 1vh;
  color: #ffffff;
  margin-top: 25px;
`;

export const Card = styled.div`
  width: 22vw;
  height: 12vw;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    z-index: 0;
  }

  h3 {
    position: absolute;
    z-index: 1;
    margin: 3vw 0 11px 3vw;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 32px;
    letter-spacing: 0.002em;
  }

  div {
    position: absolute;
    border-radius: 8px;
    width: 22vw;
    height: 12vw;
    background: linear-gradient(
      180deg,
      rgba(59, 77, 129, 0.6) -12.86%,
      rgba(59, 77, 129, 0) 106.85%
    );
  }

  @media (max-width: 900px) {
    width: 30vw;
    height: 17vw;

    div {
      width: 30vw;
      height: 17vw;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 720px) {
    width: 34vw;
    height: 20vw;

    div {
      width: 34vw;
      height: 20vw;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 590px) {
    width: 35vw;
    height: 22vw;

    div {
      width: 35vw;
      height: 22vw;
    }

    h3 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 450px) {
    width: 37vw;
    height: 24vw;
    margin-top: -20px;

    div {
      width: 37vw;
      height: 24vw;
    }

    h3 {
      font-size: 0.7rem;
    }
  }
`;
