import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #fff;

  input {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 20px;
    outline: none;
  }

  button {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    background-color: #2c3c72;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1.5rem;
    }

    &:hover {
      background-color: #3f5c98;
    }
  }
`;