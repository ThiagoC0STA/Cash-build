import styled from "styled-components";

export const Background = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -89px;

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
    z-index: 2;
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
`;
