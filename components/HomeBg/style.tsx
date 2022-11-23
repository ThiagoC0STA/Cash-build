import styled from "styled-components";

export const Background = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  z-index: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    position: absolute;
    gap: 24px;
    margin-top: 50px;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 72px;
    color: #fff;
  }

  p {
    color: #fff;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 600px) {
    height: 70vh;

    h1 {
      font-size: 2rem;
      line-height: 30px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;
