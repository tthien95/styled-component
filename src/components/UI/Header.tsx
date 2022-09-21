import 'styled-components/macro';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { links as navLinks } from './common/navLink';
import { size } from './common/Container';
import MobileHeader from './MobileHeader';
import BrandName from './common/BrandName';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const LogoWrap = styled.div`
  margin-top: 15px;

  img {
    width: 5rem;
  }
`;

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem;
  margin: 20px 20px 0px 20px;

  @media screen and (max-width: ${size.tablet}) {
    display: none;
  }
`;

const Li = styled.li`
  list-style: none;

  &:hover {
    opacity: 0.7;
    border-bottom: 5px solid var(--green);
  }

  &:hover,
  &:active {
    border-bottom: 5px solid var(--green);
    padding-bottom: 10px;
  }

  @media (min-width: ${size.mobileS}) {
    font-size: 0.9rem;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1rem;
    margin-left: 1.5rem;
  }
`;

const NavBarLink = styled(NavLink)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);
  color: var(--text);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrap>
        <BrandName />
      </LogoWrap>

      <NavBar>
        {navLinks.map((item, index) => (
          <Li key={index}>
            <NavBarLink to={`/${item.path}`}>{item.title}</NavBarLink>
          </Li>
        ))}
      </NavBar>
      <MobileHeader />
    </HeaderContainer>
  );
};

export default Header;
