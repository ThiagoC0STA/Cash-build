import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 50px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (max-width: 500px) {
    height: 150px;
    margin-bottom: 20px;
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

  @media (max-width: 1000px) {
    p {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 550px) {
    margin-top: -14vh;

    p {
      font-size: 0.7rem;
    }

    h2 {
      font-size: 1.7em;
    }
  }
`;
