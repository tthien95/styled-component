import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IButtonProps {
  colorVar?: string;
}

export const Button = styled(Link)<IButtonProps>`
  background: ${(props) =>
    props.colorVar ? css`var(${props.colorVar})` : css`var(--darkBlue)`};
  border-color: ${(props) =>
    props.colorVar ? css`var(${props.colorVar})` : css`var(--darkBlue)`};
  color: white;
  padding: 8px 20px;
  border-radius: 24px;
  transition: all 0.25s linear;
  text-decoration: none;
  box-shadow: var(--boxShadow);
  &:hover {
    box-shadow: var(--boxShadowHover);
    transform: scale(1.01);
    color: #fff;
  }
`;
