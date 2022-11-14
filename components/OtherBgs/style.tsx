import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 240px;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    z-index: 0;
  }
`;

export const Texts = styled.div`
  z-index: 1;
  margin-top: -18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  p {
    font-size: 1rem;
  }

  h2 {
    font-size: 2.8rem;
    color: #fff;
  }

  p,
  h2 {
    width: auto;
  }

  div {
    display: flex;
    gap: 5px;

    p:first-child {
      color: #e7e9eb;
    }

    p:last-child {
      color: #fff;
    }
  }
`;
