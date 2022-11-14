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
    padding: 0 15.2vw;
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
`;
