import styled from "styled-components";

export const SearchComponent = styled.section`
  position: absolute;
  margin-top: -8.6vh;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteDiv = styled.div`
  width: 68.5vw;
  height: 15.8vh;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 0.93em 2.5em 0.06em #6e80b45f;
  padding: 3.95vh 3.125vw;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 16px;
    width: 17.125vw;

    button {
      padding: 12px 24px;
      background: #4a60a1;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin-left: 63px;
    }

    label {
      font-weight: 600;
      font-size: 1em;
      line-height: 24px;
      color: #2c3a61;
    }

    select {
      border: none;
      font-weight: 400;
      font-size: 16px;
      color: #889099;
      margin-left: -4px;

      :focus {
        outline: 0;
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: start;
    justify-content: center;
  }

  div:nth-child(2),
  div:nth-child(3),
  div:last-child {
    ::before {
      content: "";
      height: 64px;
      width: 1px;
      margin-left: -40px;
      background-color: #cfd3d6;
      position: absolute;
    }
  }
`;
