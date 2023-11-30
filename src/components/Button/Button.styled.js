import styled from 'styled-components';

export const Button = styled.button`
  width: 400px;
  padding: 10px;
  font-size: 24px;
  font-variant: all-small-caps;
  text-decoration-color: #4c4c6d;
  text-decoration-line: overline;
  align-self: center;
  color: #4c4c6d;
  background-color: #ffe194;
  border: none;
  box-shadow: 0px 3px 10px -3px rgba(100, 181, 246, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 20px -15px rgba(100, 181, 246, 1);
    color: #64b5f6;
  }
`;
