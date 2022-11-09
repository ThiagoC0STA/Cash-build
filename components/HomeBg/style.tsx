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
