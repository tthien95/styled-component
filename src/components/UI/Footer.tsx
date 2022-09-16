import 'styled-components/macro';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { size, Card } from './common/Container';
import NewsLetterFooter from './common/NewsLetterFooter';
import GitHubSocial from '../../static/icons/GitHubSocial';
import TwitterSocial from '../../static/icons/TwitterSocial';

const FooterContainer = styled.div`
  padding: 20px;
  background-color: var(--grey);

  svg {
    margin-right: 20px;
    fill: var(--green);
    box-shadow: var(--boxShadow);
    border-radius: 50%;
    transition: all 0.25s linear;

    &:hover {
      box-shadow: var(--boxShadowHover);
      transform: var(--transform);
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;
`;

const Cell = styled(Card)`
  @media (min-width: ${size.mobileS}) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: ${size.tablet}) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: ${size.laptop}) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Cell>
          <Link
            to="/"
            css={`
              color: var(--text);
              text-transform: none;
            `}
          >
            <h3>Earner</h3>
          </Link>
        </Cell>
        <Cell>
          <NewsLetterFooter />
        </Cell>
        <Cell>
          <h3>Follow Us</h3>
          <a href="https://github.com/Earner-ai/" target="_new">
            <GitHubSocial />
          </a>
          <a href="https://twitter.com/earner_ai" target="_new">
            <TwitterSocial />
          </a>
        </Cell>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
