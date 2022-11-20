import styled from "styled-components";

export const FormComponent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 101px 0;
`;

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 4vw;

  div {
    border-radius: 20px;
    display: flex;
    width: 70vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;

    padding: 50px 15px;
    background: #fff;
    box-shadow: 0 0 5px rgb(59 76 129 / 10%);
    border-radius: 6.5px;
    border: 1px solid rgb(221, 221, 221);
  }

  h2 {
    font-weight: bold;
  }

  form {
    width: 100%;
    min-height: 20vh;
    gap: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    input:nth-child(5) {
      width: 850px;
    }

    button {
      padding: 0 50px;
      height: 43px;
      color: #fff;
      background-color: #4970e6ca;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      transition: all ease 0.4s;

      :hover {
        background-color: #929bff;
      }
    }
  }

  input {
    width: 240px;
    height: 43px;
    font-size: 15px;
    border-radius: 10px;
    border: none;
    background-color: #edeff6;
    color: #000000;
    padding-left: 15px;

    ::placeholder {
      color: #000000;
    }

    :focus {
      outline: none !important;
      border: none;
    }
  }
`;
