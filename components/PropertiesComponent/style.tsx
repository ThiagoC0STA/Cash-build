import styled from "styled-components";

export const PropertiesSection = styled.section`
  padding: 70px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  div:first-child {
    gap: 10px;
  }

  div:last-child {
    gap: 32px;
  }
`;

export const Carousel = styled.div`
  width: 100%;
`;

export const Cards = styled.div`
  margin-top: 25px;
`