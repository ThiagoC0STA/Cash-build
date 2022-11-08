import styled from "styled-components";

export const Background = styled.section`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  img {
    object-fit: cover;
  }

  figcaption {
    position: relative;
    text-align: center;
    height: auto;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
      gap: 24px;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 3rem;
      line-height: 72px;
    }

    p {
      max-width: 696px;
      font-weight: 400;
      font-size: 1.15rem;
      line-height: 28px;
    }
  }
`;
