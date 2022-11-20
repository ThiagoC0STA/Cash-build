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

  div:first-child {
    gap: 10px;
    
    select {
      width: 150px;
    }
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

