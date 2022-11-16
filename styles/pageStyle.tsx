import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 150px 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    text-align: start;
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 2.1rem;
    line-height: 24px;
  }

  p {
    width: 650px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    margin-top: 30px;
  }
`;

export const PropertyInfo = styled.div`
  margin: 10vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ShareIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: #edeff6;
    border-radius: 4px;
    border: none;
    width: 35px;
    height: 35px;
    transition: all ease 0.4s;

    :hover {
      background: #d3d9f1;
    }
  }
`;

export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 48px;
  }

  div {
    display: flex;
  }
`;

export const StateProperty = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    font-size: 13px;
    padding: 7px 10px 6px;
    color: #fff;
    background-color: #74a13a;
    border-radius: 4px;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 6px;
  margin: 5px 0 30px 0;

  p {
    font-size: 15px;
    color: #636363;
    font-weight: normal;
  }
`;

export const CarousselStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Items = styled.div`
  width: 800px;
  height: 700px;
  padding: 20px;
  margin-left: -17px;

  img {
    object-fit: cover;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;

    :before {
      font-size: 25px;
    }
  }

  .slick-prev {
    left: 20px;
  }

  .slick-next {
    right: 20px;
  }
`;

export const Item1 = styled.div`
  img {
    width: 800px;
    height: 500px;
  }
`;

export const Item2 = styled.div`
  img {
    width: 190px;
    height: 120px;
  }
`;
