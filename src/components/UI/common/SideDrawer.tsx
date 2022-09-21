import 'styled-components/macro';
import styled, { css, keyframes } from 'styled-components';

import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links as navLinks } from './navLink';
import CloseX from '../../../static/icons/CloseX';
import BrandName from './BrandName';

interface ISideDrawerProps {
  show: boolean;
  toggle: () => void;
}

const moveIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const moveOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const moveInClass = css`
  animation: ${moveIn} 0.3s ease-out;
  animation-fill-mode: forwards;
`;

const moveOutClass = css`
  animation: ${moveOut} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const SideDrawerWrap = styled.nav`
  background-color: var(--grey);
  height: 100%;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  z-index: 500;
  overflow: hidden;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 50px;
`;
const LI = styled.li`
  margin-top: 1.3rem;
  color: var(--darkGrey);
`;

const ClickLink = styled(NavLink)`
  color: var(--darkGrey);
  text-decoration: none;

  &.active {
    border-left: 4px solid #4a5aef;
    color: #4a5aef;
  }
`;

const SideDrawer: FC<ISideDrawerProps> = ({ show, toggle }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  const handleAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  const handleClick = () => {
    toggle();
  };

  return shouldRender ? (
    <SideDrawerWrap
      css={show ? moveInClass : moveOutClass}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        onClick={handleClick}
        css={`
          float: right;
          margin-top: 15px;
        `}
      >
        <CloseX />
      </div>
      <div
        css={`
          width: max-content;
          margin: 50px auto 0px;
        `}
      >
        <BrandName />
      </div>

      <UL>
        {navLinks.map((link, index) => (
          <LI key={index}>
            <ClickLink
              onClick={handleClick}
              to={`/${link.path}`}
              title={link.title}
            >
              {link.title}
            </ClickLink>
          </LI>
        ))}
      </UL>
    </SideDrawerWrap>
  ) : null;
};

export default SideDrawer;
