import styled from "styled-components";

export const CitiesSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  width: 100%;

  p {
    margin: 24px 0 45px 0;
  }

  .container {
    width: 100%;
    padding: 0 10.2vw;
  }
`;

export const CitiesDiv = styled.div`
  margin-bottom: 2vh;
  color: #ffffff;

  div {
    width: 25vw;
    height: 15vw;
    border-radius: 8px;
  }

  h3 {
    position: absolute;
    z-index: 1;
    margin: 24px 0 11px 24px;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 32px;
    letter-spacing: 0.002em;
  }

  p {
    position: absolute;
    z-index: 1;
    margin: 60px 0 0 24px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }

  figure {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 26.5vw;
      height: 15vw;
      border-radius: 8px;
    }

    div {
      background: linear-gradient(
        180deg,
        rgba(59, 77, 129, 0.5) -12.86%,
        rgba(59, 77, 129, 0) 106.85%
      );
      position: absolute;
      border-radius: 8px;
    }
  }
`;
