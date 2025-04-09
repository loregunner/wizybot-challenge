import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 60px;
  height: 60px;
  background-color: #2c3c72;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3f5c98;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
