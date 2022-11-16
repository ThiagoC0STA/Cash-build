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
    background-color: #28a745;
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
  align-items: start;
  justify-content: start;
  gap: 20px;
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

export const StickyElement = styled.aside`
  height: 200vh;
  margin-top: 20px;

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
      height: 80px;
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
