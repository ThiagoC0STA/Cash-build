import styled from "styled-components";

export const PropertiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 12.4vh;

  .style__Cards-sc-1lr1ma2-3 {
    margin-top: 10px;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin-left: -15px;
  margin-bottom: 50px;
  background: #ececec;
  padding: 20px 20px;
  border-radius: 6px;

  p,
  img {
    cursor: pointer;
  }

  p {
    color: #1d1d1d;
  }

  .selected {
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  select {
    border: none;
    font-weight: 400;
    font-size: 1rem;
    color: #1d1d1d;
    margin-left: -4px;
    background: transparent;

    :focus {
      outline: 0;
    }
  }

  div:first-child {
    gap: 50px;
  }

  div:last-child {
    gap: 32px;
  }

  @media (max-width: 1150px) {
    width: 90vw;
  }

  @media (max-width: 1050px) {
    div:first-child {
      gap: 25px;
    }

    div:last-child {
      gap: 25px;
    }

    select,
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
    border-radius: 0;
    margin-left: 0;
  }

  @media (max-width: 760px) {
    width: 100vw;
    border-radius: 0;
    margin-left: 0;

    div:first-child,
    div:last-child {
      gap: 20px;
    }

    select,
    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 650px) {
    div:first-child,
    div:last-child {
      gap: 17px;
    }

    select,
    p {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 540px) {
    padding: 15px 15px;
    margin-bottom: 30px;

    div:first-child,
    div:last-child {
      gap: 20px;
    }

    select,
    p {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 440px) {
    padding: 10px 10px;
    margin-bottom: 20px;

    img {
      width: 5px;
      height: 5px;
    }

    select,
    p {
      font-size: 0.4rem;
    }
  }

  @media (max-width: 350px) {
    padding: 7px 10px;
    margin-bottom: 15px;

    div:first-child,
    div:last-child {
      gap: 10px;
    }

    select,
    p {
      font-size: 0.35rem;
    }
  }

  @media (max-width: 290px) {
    margin-bottom: 10px;

    select,
    p {
      font-size: 0.31rem;
    }
  }
`;

export const Carousel = styled.div`
  width: 100%;
  padding: 0 10.5vw;
  margin-bottom: 40px;
  transition: all ease 0.4s;

  .slick-dots {
    bottom: -60px;
  }

  .slick-dots li button:before {
    font-size: 8px;
  }

  @media (max-width: 1400px) {
    padding: 0 10.5vw 0 17.5vw;
  }

  @media (max-width: 1200px) {
    padding: 0 8.5vw 0 15.5vw;
  }

  @media (max-width: 950px) {
    padding: 0 4vw 0 7.5vw;
  }

  @media (max-width: 800px) {
    padding: 0 3vw 0 6.5vw;
  }

  @media (max-width: 750px) {
    padding: 0 3vw 0 4.5vw;
    margin-bottom: 0px;

    .slick-dots li button:before {
      margin-top: -20px;
      font-size: 5px;
    }
  }

  @media (max-width: 430px) {
    padding: 0 2vw 0 2vw;
  }
`;

export const Cards = styled.div``;

export const NotFound = styled.div`
  margin: 100px 5px;
`;

export const ShareDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000008a;

  div {
    min-width: 500px;
    padding: 10px 0;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    figure {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 97%;
      margin-top: 10px;

      img {
        cursor: pointer;
        position: absolute;
      }
    }

    p {
      font-size: 18px;
      margin-bottom: 10px;
      color: #0055b0;
    }
  }
`;
