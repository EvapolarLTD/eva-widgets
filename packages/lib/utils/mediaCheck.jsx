import styled from 'styled-components';
import { sizes } from '../ui/common';

const FullHDMin = styled.div`
  @media (max-width: ${sizes.fullHD - 1}px) {
    display: none;
  }
`;

const FullHDMax = styled.div`
  @media (min-width: ${sizes.fullHD}px) {
    display: none;
  }
`;

const DesktopMin = styled.div`
  @media (max-width: ${sizes.desktop - 1}px) {
    display: none;
  }
`;

const DesktopMax = styled.div`
  @media (min-width: ${sizes.desktop}px) {
    display: none;
  }
`;

const LaptopMin = styled.div`
  @media (max-width: ${sizes.laptop - 1}px) {
    display: none;
  }
`;

const LaptopMax = styled.div`
  @media (min-width: ${sizes.laptop}px) {
    display: none;
  }
`;

const MediumMin = styled.div`
  @media (max-width: ${sizes.medium - 1}px) {
    display: none;
  }
`;

const MediumMax = styled.div`
  @media (min-width: ${sizes.medium}px) {
    display: none;
  }
`;

const TabletMin = styled.div`
  @media (max-width: ${sizes.tablet - 1}px) {
    display: none;
  }
`;

const TabletMax = styled.div`
  @media (min-width: ${sizes.tablet}px) {
    display: none;
  }
`;

const PhoneMin = styled.div`
  @media (max-width: ${sizes.phone - 1}px) {
    display: none;
  }
`;

const PhoneMax = styled.div`
  @media (min-width: ${sizes.phone}px) {
    display: none;
  }
`;

// Special
const BetweenTabletDesktop = styled.div`
  @media (max-width: ${sizes.tablet - 1}px), (min-width: ${sizes.desktop}px) {
    display: none;
  }
`;

export {
  FullHDMin,
  FullHDMax,
  DesktopMin,
  DesktopMax,
  LaptopMin,
  LaptopMax,
  MediumMin,
  MediumMax,
  TabletMin,
  TabletMax,
  PhoneMin,
  PhoneMax,
  BetweenTabletDesktop,
};
