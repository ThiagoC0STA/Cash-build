import styled from "styled-components";

export const FormComponent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 141px 0;
`;

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4vw;

  div:first-child {
    background-color: #3b4c7e;
    width: 40vw;
    border-radius: 20px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
  }

  h2 {
    color: #fff;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    background-color: #7c8fc7;
    width: 40vw;
    border-radius: 20px;
    height: 70vh;

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    a {
      width: 58px;
      height: 58px;
      background: #fff;
      border-radius: 4px;
      border: none;
      transition: all ease 0.4s;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        background: #e7e9f4;
      }
    }
  }

  form {
    width: 35vw;
    height: 32vh;
    gap: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    input:nth-child(5) {
      width: 31vw;
    }

    button {
      padding: 10px 50px;
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
    width: 15vw;
    height: 5vh;
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
