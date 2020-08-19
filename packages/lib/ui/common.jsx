import styled, { css } from 'styled-components';

export const colors = {
  main: '#02706D',
  accent: '#FA7814',
  text: '#013E3E',
  error: '#D23F36',
};
export const colorsBar = {
  white: '#FFFFFF',
  black: '#515151',
  grey: '#808080',
  pink: '#FFC0CB',
};
export const sizes = {
  fullHD: 1920,
  desktop: 1400,
  laptop: 1200,
  medium: 960,
  tablet: 769,
  phone: 600,
  iphone5: 320,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => `
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => `
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  ${media.medium`
    max-width: 930px;
  `}
  ${media.laptop`
    max-width: 1140px;
  `}
`;
export const Headline = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  text-align: center;
  color: ${colors.main};
  ${media.phone`
    font-size: 38px;
  `}
`;

export const text = css`
  font-weight: 300;
  font-size: 13px;
  color: ${colors.text};
`;

export const Text = styled.div`
  ${text};
  line-height: 1.75;
`;
