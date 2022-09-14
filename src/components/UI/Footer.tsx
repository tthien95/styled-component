import styled from 'styled-components';

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

const Footer = () => {
  return (
    <FooterContainer>
      <Column>Footer</Column>
    </FooterContainer>
  );
};

export default Footer;
