import { useState } from 'react';
import styled from 'styled-components';

import { size } from './common/Container';
import SideDrawer from './common/SideDrawer';

const ToggleButton = styled.button`
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  margin-left: auto;
  margin-top: 15px;

  @media (max-width: ${size.tablet}) {
    display: flex;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 5px;
  background-color: var(--softRed);
  border-radius: 1px;
`;

const MobileHeader = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleToggle = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    <>
      <ToggleButton onClick={handleToggle}>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
      </ToggleButton>
      <SideDrawer show={showSideNav} toggle={handleToggle} />
    </>
  );
};

export default MobileHeader;
