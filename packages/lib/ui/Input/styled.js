import styled from 'styled-components';
import { colors, media } from '../common';

export const Wrap = styled.div`
  box-sizing: border-box;
  position: relative;
  font-size: 14px;
  input {
    width: 100%;
    padding: 15px 13px 0;
    height: ${(props) => props.theme.height};
    box-sizing: border-box;
    outline: none;
    color: ${(props) => props.theme.main};
    background: transparent;
    position: relative;
    z-index: 1;
    border-radius: 4px;
    transition: 0.25s ease-out;
    border: 1px solid
      ${(props) => (props.error ? colors.error : props.theme.borderDefault)};
    &:focus + label {
      border-color: ${(props) => props.theme.border};
      top: 6px;
      left: 13px;
      font-size: 11px;
    }
    &:focus {
      border-color: ${(props) => props.theme.border};
    }
  }
  input:focus ~ div {
    opacity: ${(props) => props.theme.focusOpacity};
  }
  ${media.phone`
    margin-bottom: 5px; 
  `}
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.main} !important;
  }
`;
export const Label = styled.label`
  position: absolute;
  font-size: ${(props) => (props.fixed ? '11px' : '14px')};
  top: ${(props) => (props.fixed ? '6px' : props.theme.labelOffY)};
  left: ${(props) => (props.fixed ? '13px' : '15px')};
  transition: 0.25s ease-out;
  opacity: 0.7;
  color: ${colors.text};
`;
export const Tooltip = styled.div`
  width: 198px;
  font-size: 12px;
  color: #ffffff;
  padding: 9px;
  line-height: 1.5;
  box-sizing: border-box;
  background: #013e3e;
  position: absolute;
  right: -12px;
  bottom: calc(100% + 6px);
  text-align: center;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s ease-out;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    top: 100%;
    right: 17px;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: #013e3e transparent transparent transparent;
  }
`;
export const Icon = styled.div`
  position: absolute;
  width: 16px;
  right: 12px;
  top: 17px;
  z-index: 1;
  img {
    display: block;
  }
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;
export const Error = styled.div`
  padding: 2px 0;
  min-height: 20px;
  font-size: 12px;
  line-height: 1.4;
  box-sizing: border-box;
  color: ${colors.error};
  transition: 0.25s ease-out;
  ${media.phone`
     min-height: 27px;
  `}
`;
