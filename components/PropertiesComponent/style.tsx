import styled from "styled-components";

export const PropertiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 12.4vh;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin-left: -15px;
  background: #f0f0f0;
  padding: 20px 20px;
  border-radius: 6px;

  p,
  img {
    cursor: pointer;
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
    color: rgb(106, 106, 106);
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
`;

export const Carousel = styled.div`
  width: 100%;
  transition: all ease 0.4s;

  .slick-dots {
    bottom: -60px;
  }

  .slick-dots li button:before {
    font-size: 8px !important;
  }
`;

export const Cards = styled.div`
 
`;

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
