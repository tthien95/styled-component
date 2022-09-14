import styled from 'styled-components';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;
  @media ${size.mobileS} {
    padding: 0rem 1rem;
  }
  @media ${size.mobileM} {
    padding: 0rem 1rem;
  }
  @media ${size.mobileL} {
    padding: 0rem 2rem;
  }
  @media ${size.tablet} {
    padding: 0rem 3rem;
  }
`;

export const Resources = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  max-width: 1440px;
  @media (max-width: ${size.mobileL}) {
    h2 {
      text-align: center;
    }
    p {
      text-align: justify;
    }
  }
`;
