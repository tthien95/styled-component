import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import styled from 'styled-components';
import { size } from './Container';
import { Input } from './Input';
import { Button } from './Button';

const Wrapper = styled.div`
  display: block;
  position: relative;

  @media (max-width: ${size.mobileL}) {
    margin: 0 auto;
  }
`;

const NewsWrap = styled.div`
  margin: 0 auto;
`;

const NewsButton = styled(Button)`
  margin: auto;
  margin-top: 30px;
`;

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const NewsLetterFooter = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  return (
    <Wrapper>
      <NewsWrap>
        <h3>Let&apos;s keep in touch!</h3>
        <p>Subcribe to our newsletter & stay up to date with our services.</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder="your@email.com"
            name="email"
          />
        </form>
        <NewsButton
          title="Subscribe to our newsletter"
          name="Subcribe"
          type="submit"
        >
          Subcribe
        </NewsButton>
      </NewsWrap>
    </Wrapper>
  );
};

export default NewsLetterFooter;
