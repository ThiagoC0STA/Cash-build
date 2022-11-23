import styled from "styled-components";

export const SearchComponent = styled.section`
  position: relative;
  margin-top: -8.6vh;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: -5vh;
  }
`;

export const WhiteDiv = styled.div`
  width: 55.3vw;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.93rem 2.5rem 0.06rem #6e80b431;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .line-before-content {
    ::before {
      content: "";
      margin-left: -5vw;
      position: absolute;
      height: 8vh;
      width: 1px;
      background-color: #cfd3d6;
    }
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 600px) {
    height: 10vh;

    .line-before-content {
      ::before {
        height: 6vh;
      }
    }
  }

  @media (max-width: 450px) {
    width: 95vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 17px;

    button {
      padding: 12px 24px;
      background: #4a60a1;
      border-radius: 0.25rem;
      border: none;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
      color: #ffffff;
    }

    label {
      font-weight: 600;
      font-size: 1rem;
      line-height: 24px;
      color: #2c3a61;
    }

    select {
      border: none;
      font-weight: 400;
      font-size: 1rem;
      color: #6a6a6a;
      margin-left: -4px;

      :focus {
        outline: 0;
      }
    }

    @media (max-width: 1000px) {
      gap: 10px;

      button,
      label,
      select {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 600px) {
      gap: 5px;

      button,
      label,
      select {
        font-size: 0.6rem;
      }

      button {
        padding: 6px 20px;
      }
    }

    @media (max-width: 400px) {
      gap: 2px;

      button,
      label,
      select {
        font-size: 0.5rem;
      }
    }
  }
`;
