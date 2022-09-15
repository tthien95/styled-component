import styled from 'styled-components';
import Banner from './Banner';
import { PlainContainer, Resources } from '../../UI/common/Container';
import ResourceCard from '../../UI/common/ResourceCard';
import resourceData from '../../../data/resources.json';
import GitHub from '../../../static/icons/GitHub';

const H1_UPPER = styled.h1`
  text-align: center;
  color: var(--softRed);
  margin: 50px 0;
`;

const P = styled.p`
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 50px 0;
`;

const TextContainer = styled.div`
  max-width: 50rem;
  line-height: 1.5rem;
  margin: 0px auto 50px auto;
`;

const GitHubLink = styled.a`
  margin: auto;
  display: block;
  text-align: center;
  width: max-content;
`;

const Home = () => {
  return (
    <>
      <Banner />
      <PlainContainer>
        <H1_UPPER>Stay informed with Earner</H1_UPPER>
        <P>
          Learn about services you&apos;re entitled to from the Finnish
          government.
        </P>

        <Resources>
          {resourceData.map(({ node }) => (
            <ResourceCard
              key={node.id}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              tags={node.frontmatter.tags}
              source={node.frontmatter.source}
              slug={node.frontmatter.slug}
            />
          ))}
        </Resources>

        <H1>For the people, by the people</H1>
        <TextContainer>
          <P>
            Earner was created by people who have struggled with the job market
            and lack of knowledge regarding resources available to them. At
            Earner, we want to build a bridge between the employment community
            and services available to them from the Finnish government.
          </P>
          <P>
            We believe in community.{' '}
            <b>Earner is open-source for this reason.</b>
            Want to help others learn about Finnish services? You can help
            Earner grow. Find us on GitHub.
          </P>
          <GitHubLink href="https://github.com/Earner-ai/" target="_new">
            <GitHub />
          </GitHubLink>
        </TextContainer>
      </PlainContainer>
    </>
  );
};

export default Home;
