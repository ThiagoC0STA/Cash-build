import styled from "styled-components";

export const PropertiesSection = styled.section`
  padding: 70px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
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
`;

export const Cards = styled.div`
  margin-top: 25px;
`;

export const NotFound = styled.div`
  margin: 100px 5px;
`;
