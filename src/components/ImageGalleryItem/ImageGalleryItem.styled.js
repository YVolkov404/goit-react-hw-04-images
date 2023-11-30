import { styled } from 'styled-components';

export const Item = styled.li`
  width: calc((100% - 90px) / 4);
  height: auto;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
  }
`;

export const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
