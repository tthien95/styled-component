import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

const H2 = styled.h2`
  color: var(--darkBlue);
  text-transform: none;
`;

const BrandName: FC<PropsWithChildren> = ({ children = 'earner' }) => {
  return (
    <Link to="/" title="earner">
      <H2>{children}</H2>
    </Link>
  );
};

export default BrandName;
