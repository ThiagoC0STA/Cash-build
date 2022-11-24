import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 40px 10vw 100px 10vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 2.1rem;
    line-height: 24px;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1.9rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const PropertyInfo = styled.div`
  margin: 7vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WayDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: wrap;
    gap: 10px;
    align-items: center;
    font-size: 14px;

    color: #00aeff;
  }

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
    background-color: #00a325;
    border-radius: 4px;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 30px 0;
  width: 52.5vw;

  p {
    font-size: 15px;
    color: #636363;
    font-weight: normal;
  }

  div,
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure {
    gap: 0.3em;
  }

  div:first-child {
    gap: 6px;
  }

  div:last-child {
    gap: 1.2em;

    p {
      font-weight: bold;
    }
  }
`;

export const CarousselStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 20px;
`;

export const Items = styled.div`
  width: 52.5vw;

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
    width: 52.5vw;
    height: 61.7vh;
    object-fit: cover;
  }
`;

export const Item2 = styled.div`
  img {
    width: 10.5vw;
    height: 13.5vh;
    object-fit: cover;
  }
`;

export const StickyElement = styled.aside`
  height: 100%;
  position: absolute;
  right: 10vw;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 15px;
    width: 23vw;
    position: sticky;
    top: 20px;
    padding: 50px 15px;
    background: #fff;
    box-shadow: 0 0 5px rgba(59, 76, 129, 0.1);
    border-radius: 6.5px;
    border: 1px solid rgb(221, 221, 221);

    input,
    textarea {
      width: 90%;
      border: 1px solid #dce0e0;
      font-size: 15px;
      padding: 0.375rem 0.75rem;

      ::placeholder {
        color: #d3d3d3;
      }
    }

    input {
      width: 90%;
      height: 40px;
      border: 1px solid #dce0e0;
    }

    textarea {
      resize: vertical;
      font-family: "Public Sans", sans-serif;
      height: 130px;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      button {
        width: calc(50% - 20px);
        font-size: 15px;
        border: none;
        font-weight: bold;
        padding: 0 9px;
        line-height: 40px;
        border-radius: 5px;
      }

      button:first-child {
        background-color: #28a745;
        color: #fff;
        border: 1px solid #28a745;
        transition: all ease 0.4s;

        :hover {
          background-color: #2cd052;
        }
      }

      button:last-child {
        background-color: #fff;
        color: #28a745;
        border: 1px solid #28a745;
        transition: all ease 0.4s;

        :hover {
          background-color: #28a745;
          color: #fff;
        }
      }
    }
  }
`;

export const OverviewContainer = styled.div`
  width: 52.5vw;
  min-height: 25vh;
  margin-top: 30px;
  margin-bottom: 130px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: start;

  background: #fff;
  box-shadow: 0 0 5px rgba(59, 76, 129, 0.1);
  border-radius: 6.5px;
  border: 1px solid rgb(221, 221, 221);

  div {
    width: 47.5vw;
    height: 1px;
    background: rgb(210, 210, 210);
    position: absolute;
    margin-top: 70px;
  }
`;
