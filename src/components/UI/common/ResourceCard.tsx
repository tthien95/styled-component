import 'styled-components/macro';

import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from './Button';

import { size, Card } from './Container';
import { Link } from 'react-router-dom';

const cardText = css`
  margin-bottom: 15px;
`;

const cardButtonStyle = css`
  font-size: 16px;
  @media (max-width: ${size.mobileL}) {
    margin-left: 27%;
  }
`;

interface IResourceCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  source: string[];
}

const ResourceCard = (props: IResourceCardProps) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <p
        css={`
          margin-bottom: 30px;
        `}
      >
        {props.excerpt}
      </p>
      <Button
        as={Link}
        colorVar="--green"
        to={`/${props.slug}`}
        css={cardButtonStyle}
      >
        Read More
      </Button>
      <br />
      <br />
      <small css={cardText}>
        <b>Category: &nbsp; </b>
        {props.tags.map((tag: string) => {
          return <>{tag} </>;
        })}
      </small>
      <br />
      <small css={cardText}>
        <b>Source: &nbsp; </b>
        {props.source.map((source: string) => {
          return <>{source} </>;
        })}
      </small>
    </Card>
  );
};

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.string.isRequired,
};

export default ResourceCard;
