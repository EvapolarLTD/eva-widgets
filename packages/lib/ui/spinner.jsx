import React from 'react';
import styled from 'styled-components';
import { DotLoader } from 'react-spinners';

const WrapAnim = styled.div`
  position: relative;
  left: calc(50% - 60px / 2);
  top: calc(50% - 60px / 2);
`;

const Spinner = () => {
  return (
    <>
      <WrapAnim>
        <DotLoader color="green" />
      </WrapAnim>
    </>
  );
};

export default Spinner;
