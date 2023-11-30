import styled from 'styled-components';

export const LargeImage = styled.img`
  height: auto;
`;

export const overlayClassName = {
  content: {
    margin: `70px auto 0 auto`,
    maxWidth: '1380px',
    minWidth: '980px',
    height: 'auto',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    padding: '0',
    inset: '100px',
    border: '0',
    borderRadius: '0',
  },

  overlay: {
    backgroundColor: 'rgba(85, 85, 85, 0.75)',

    // ReactModal__Overlay: {
    //   transition: `opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    //   opacity: '0',
    // },
    // 'ReactModal__Overlay--afterOpen': {
    //   opacity: '1',
    // },
    // 'ReactModal__Overlay--beforeClose': {
    //   opacity: '0',
    // },
  },
};
