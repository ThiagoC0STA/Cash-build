import styled from "styled-components";

export const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  background: #f3f3f3;
  height: 120px;

  button {
    width: 48px;
    height: 48px;
    background: #edeff6;
    border-radius: 4px;
    border: none;
    transition: all ease 0.4s;

    :hover {
      background: #d3d9f1;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  p {
    font-weight: 300;
    font-size: 19px;
    line-height: 32px;
    color: #000000;
  }
`;
