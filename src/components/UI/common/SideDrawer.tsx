import 'styled-components/macro';
import styled, { css } from 'styled-components';

import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links as navLinks } from './navLink';
import CloseX from '../../../static/icons/CloseX';

interface ISideDrawerProps {
  show: boolean;
  toggle: () => void;
}

const SideDrawerWrap = styled.nav<{
  show: boolean;
  children?: React.ReactNode;
}>`
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
  transition: transform 0.3s ${({ show }) => (show ? 'ease-in' : 'ease-out')};
  transform: ${({ show }) =>
    show ? css`translateX(0%)` : css`translateX(-100%)`};
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
  const handleClick = () => {
    toggle();
  };

  return (
    <SideDrawerWrap show={show}>
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
        <Link to="/" title="earner">
          <h2
            css={`
              text-transform: none;
              color: var(--darkBlue);
            `}
          >
            earner
          </h2>
        </Link>
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
  );
};

export default SideDrawer;
