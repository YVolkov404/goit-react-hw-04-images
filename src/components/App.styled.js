import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 1280px;
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  gap: 30px;
  padding: 109px 30px 30px 30px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: inherit;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 25px 80px 10px 80px;
  background-color: #64b5f6;
  box-shadow: 0px 10px 20px -15px rgba(0, 0, 0, 0.75);
  z-index: 999;
`;
