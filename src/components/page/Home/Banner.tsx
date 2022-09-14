import styled from 'styled-components';
import bannerImg from '../../../static/images/office-phone.png';

import { Container, size } from '../../UI/common/Container';

const Background = styled.div`
  background-image: url(${bannerImg});
  padding: 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: unset;
  min-height: 768px;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  min-height: 768px;
  background-color: rgba(2, 38, 64, 0.4);
`;

const TextContainer = styled(Container)`
  padding: 200px 20px;
  color: white;
`;

const Text = styled.div`
  width: 50%;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    text-align: center;
  }
`;

const Banner = () => {
  return (
    <Background>
      <Overlay>
        <TextContainer>
          <Text>
            <h1>Serving the Finnish employment community.</h1>
            <h3>
              Learn about the services available to you as a job seeker,
              employee, or entrepreneur.
            </h3>
          </Text>
        </TextContainer>
      </Overlay>
    </Background>
  );
};

export default Banner;
