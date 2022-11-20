import styled from "styled-components";

export const Recent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  width: 100%;

  .subtitle {
    margin: 24px 0 45px 0;
  }
`;

export const Card = styled.div`
  width: 25vw;
  height: 63.2vh;
  background: #ffffff;
  margin-left: 6px;
  margin-top: 25px;
  box-shadow: 0 0 10px rgba(59, 77, 129, 0.08);
  border-radius: 6.5px;
  border: 1px solid rgb(221, 221, 221);

  img {
    width: 100%;
    max-height: 240px;
    object-fit: cover;
    border-radius: 6.5px 6.5px 0px 0px;
    cursor: pointer;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 16px;
    margin-left: 25px;

    p {
      font-size: 13px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 21.4141px;
    line-height: 30px;
    color: #363a3d;
    margin: 24px 0 0 25px;
    height: 60px;
  }

  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4a60a1;
  }
`;

export const Cards = styled.div`
  background-color: #fff;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 10.5vw;
  margin-bottom: 200px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  margin: 1.97vh 25px 0 25px;

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
`;
