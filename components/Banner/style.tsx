import styled from "styled-components";

export const BannerElement = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background: transparent;
    padding: 12px 24px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    margin-top: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  h2,
  p,
  button {
    color: #fff;
  }
`;
