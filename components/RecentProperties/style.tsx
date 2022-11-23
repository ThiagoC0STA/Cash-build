import styled from "styled-components";

export const Recent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 18.5vh;
  width: 100%;

  .subtitle {
    margin: 24px 0 45px 0;
  }

  @media (max-width: 1000px) {
    margin-top: 14vh;
  }

  @media (max-width: 600px) {
    margin-top: 10vh;

    .subtitle {
      margin: 24px 0 30px 0;
    }
  }

  @media (max-width: 440px) {
    .slick-dots li button:before {
      font-size: 4px;
    }
  }
`;

export const Card = styled.div`
  width: 25vw;
  height: 540px;
  background: #ffffff;
  margin: 0 0 10px 0.375vw;
  box-shadow: 0 0 10px rgba(59, 77, 129, 0.08);
  border-radius: 6.5px;
  border: 1px solid rgb(221, 221, 221);

  img {
    width: 100%;
    max-height: 29.6vh;
    object-fit: cover;
    border-radius: 6.5px 6.5px 0px 0px;
    cursor: pointer;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 1.97rem;
    margin-left: 20px;

    p {
      font-size: 0.813rem;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.313rem;
    line-height: 1.8rem;
    color: #363a3d;
    margin: 2.96vh 20px 0 20px;
    min-height: 7.4vh;
  }

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #4a60a1;
  }

  @media (max-width: 1500px) {
    width: 25vw;
    height: 520px;

    .price {
      margin-top: 6px;

      p {
        font-size: 0.8rem;
      }
    }

    h3 {
      font-size: 1.1rem;
    }

    h4 {
      font-size: 1.1rem;
    }

    img {
      max-height: 220px;
    }
  }

  @media (max-width: 1400px) {
    width: 30vw;
    height: 500px;
  }

  @media (max-width: 1200px) {
    width: 35vw;
    height: 470px;
  }

  @media (max-width: 950px) {
    width: 40vw;
    height: 470px;

    .price {
      margin-top: 6px;

      p {
        font-size: 0.6rem;
      }
    }

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 1rem;
    }

    img {
      max-height: 200px;
    }
  }

  @media (max-width: 800px) {
    width: 44vw;
    height: 450px;

    .price {
      margin-top: 6px;

      p {
        font-size: 0.6rem;
      }
    }

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 1rem;
    }

    img {
      max-height: 200px;
    }
  }

  @media (max-width: 650px) {
    height: 400px;

    .price {
      margin-top: 6px;

      p {
        font-size: 0.6rem;
      }
    }

    h3 {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 0.9rem;
    }

    img {
      max-height: 170px;
    }
  }

  @media (max-width: 580px) {
    height: 310px;

    .price {
      margin-top: 3px;
      margin-left: 15px;

      p {
        font-size: 0.6rem;
      }
    }

    h3 {
      margin: 10px 15px 0 15px;
      line-height: 1.2rem;
    }

    h4 {
      line-height: 1rem;
    }

    h3,
    h4 {
      font-size: 0.74rem;
    }

    img {
      max-height: 140px;
    }
  }

  @media (max-width: 500px) {
    height: 270px;

    .price {
      margin-top: 0;

      p {
        font-size: 0.6rem;
      }
    }

    h3,
    h4 {
      font-size: 0.67rem;
    }

    img {
      max-height: 110px;
    }
  }

  @media (max-width: 430px) {
    width: 46vw;
    height: 270px;
  }

  @media (max-width: 370px) {
    height: 220px;

    .price {
      margin-top: 0;

      p {
        font-size: 0.4rem;
        margin-top: -20px;
      }
    }

    h3 {
      line-height: 0.8rem;
    }

    h4 {
      line-height: 0.1rem;
      margin-top: -20px;
    }

    h3,
    h4 {
      font-size: 0.53rem;
    }

    img {
      max-height: 90px;
    }
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  padding: 0 10.5vw;
  margin-bottom: 24.6vh;

  @media (max-width: 1400px) {
    padding: 0 10.5vw 0 17.5vw;
  }

  @media (max-width: 1200px) {
    padding: 0 8.5vw 0 15.5vw;
  }

  @media (max-width: 950px) {
    padding: 0 4vw 0 7.5vw;
    margin-bottom: 15vh;
  }

  @media (max-width: 800px) {
    padding: 0 3vw 0 6.5vw;
  }

  @media (max-width: 750px) {
    padding: 0 3vw 0 4.5vw;
    margin-bottom: 10vh;
  }

  @media (max-width: 430px) {
    padding: 0 2vw 0 2vw;
  }

  @media (max-width: 430px) {
    margin-bottom: 8vh;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  margin: 10px 20px 0 20px;

  div {
    img {
      width: 24px;
      height: 24px;
    }
  }

  figure {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;
  }

  div:last-child {
    width: 100%;
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 28px;
    color: #363a3d;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #edeff6;
      border-radius: 4px;
      border: none;
      padding: 5px;
      transition: all ease 0.4s;

      :hover {
        background: #d3d9f1;
      }
    }

    ::after {
      content: "";
      height: 1px;
      width: 21.5vw;
      margin-top: -70px;
      background-color: #e7e9eb;
      z-index: 1;
      position: absolute;
    }
  }

  @media (max-width: 1400px) {
    div:last-child {
      ::after {
        width: 27vw;
      }
    }
  }

  @media (max-width: 1200px) {
    div:last-child {
      ::after {
        width: 31.5vw;
      }
    }

    div {
      img {
        width: 21px;
        height: 21px;
      }
    }

    h5 {
      font-size: 1rem;
    }
  }

  @media (max-width: 950px) {
    div:last-child {
      ::after {
        width: 35.5vw;
      }
    }
  }

  @media (max-width: 650px) {
    div:last-child {
      ::after {
        width: 37.5vw;
      }
    }

    div {
      figcaption {
        font-size: 0.8rem;
      }

      img {
        width: 19px;
        height: 19px;
      }
    }

    h5 {
      font-size: 0.8rem;
    }

    button {
      img {
        width: 17px;
        height: 17px;
      }
    }
  }

  @media (max-width: 580px) {
    gap: 15px;
    margin: 10px 15px 0 15px;

    div:last-child {
      ::after {
        width: 38.5vw;
        margin-top: -40px;
      }
    }

    div {
      figcaption {
        font-size: 0.7rem;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }

    h5 {
      font-size: 0.7rem;
    }

    button {
      img {
        width: 14px;
        height: 14px;
      }
    }
  }

  @media (max-width: 500px) {
    gap: 10px;

    div:last-child {
      ::after {
        width: 37vw;
        margin-top: -35px;
      }
    }

    div {
      figcaption {
        font-size: 0.6rem;
      }

      img {
        width: 15px;
        height: 15px;
      }
    }

    h5 {
      font-size: 0.6rem;
    }

    button {
      img {
        width: 13px;
        height: 13px;
      }
    }
  }

  @media (max-width: 370px) {
    gap: 7px;
    margin-top: 2px;

    div:first-child {
      gap: 15px;
    }

    div:last-child {
      ::after {
        width: 37vw;
        margin-top: -30px;
      }

      button {
        padding: 4px;

        img {
          width: 12px;
          height: 12px;
        }
      }
    }

    div {
      figcaption {
        font-size: 0.5rem;
      }

      img {
        width: 13px;
        height: 13px;
      }
    }

    h5 {
      font-size: 0.5rem;
    }
  }
`;

export const BlueDiv = styled.div`
  font-weight: 400;
  font-size: 14.9515px;
  line-height: 23px;
  color: #ffffff;
  border-radius: 4px;
  padding: 4.27184px 12.8155px;
  position: absolute;
  z-index: 1;
  margin: 7px;

  .blue {
    background-color: #4a60a1;
  }

  .green {
    background-color: #00a325;
  }

  @media (max-width: 580px) {
    font-size: 0.7rem;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
    padding: 0 8px;
  }
`;
