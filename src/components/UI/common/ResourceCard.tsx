import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { size } from './Container';

const Card = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (min-width: ${size.mobileS}) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: ${size.tablet}) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: ${size.laptop}) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

const Content = styled.p`
  margin-bottom: 30px;
`;

const Category = styled.small`
  margin-bottom: 15px;
`;

const Source = styled.small`
  margin-bottom: 15px;
`;

const CardButton = styled(Button)`
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
      <Content>{props.excerpt}</Content>
      <CardButton colorVar="--green" to={`/${props.slug}`}>
        Read More
      </CardButton>
      <br />
      <br />
      <Category>
        <b>Category: &nbsp; </b>
        {props.tags.map((tag: string) => {
          return <>{tag} </>;
        })}
      </Category>
      <br />
      <Source>
        <b>Source: &nbsp; </b>
        {props.source.map((source: string) => {
          return <>{source} </>;
        })}
      </Source>
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
