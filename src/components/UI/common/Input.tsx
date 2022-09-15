import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.7rem;
  width: 100%;
  box-shadow: rgb(213, 210, 208) 5px 5px 15px inset,
    rgb(255, 255, 255) -5px -5px 15px inset;
  border-radius: 24px;
  border: none;
  &:focus {
    outline: none;
  }
`;
