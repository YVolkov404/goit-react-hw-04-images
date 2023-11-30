import { Form as TagForm, Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';
import { FcSearch } from 'react-icons/fc';
import { SiOpensearch } from 'react-icons/si';

export const Form = styled(TagForm)`
  position: relative;
  width: max-content;
`;

export const Btn = styled.button`
  width: auto;
  height: 44px;
  position: absolute;
  background-color: #ffe194;
  border: 2px solid #ffe194;
  border-radius: 5px;
  cursor: pointer;
`;

export const BtnLabel = styled(FcSearch)`
  width: 40px;
  vertical-align: bottom;
  filter: drop-shadow(0px 0px 1px rgb(76, 76, 109, 1));

  &:hover,
  &:focus {
    filter: none;
  }
`;

export const Input = styled(Field)`
  width: 400px;
  height: 44px;
  padding-left: 55px;
  border: 2px solid #ffe194;
  border-radius: 5px;
  font-size: 18px;
  color: #4c4c6d;

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  display: inline-block;
  top: -20px;
  right: 5px;
  font-size: 14px;
  color: #4c4c6d;
`;

export const Logo = styled.span`
  font-family: 'Red Rose', serif;
  font-size: 26px;
  font-weight: 700;
  color: #ffe194;
  text-decoration-color: #4c4c6d;
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
  text-decoration-style: solid;
`;

export const Icon = styled(SiOpensearch)`
  color: #4c4c6d;
  filter: drop-shadow(1px 1px 1px rgb(76, 76, 109, 1));
`;
