import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text.default};
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.text.default};
  font-weight: 800;
  font-size: 36px;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.text.default};
  font-weight: 800;
  font-size: 1.875rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.text.default};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  color: ${({ theme }) => theme.text.default};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  color: ${({ theme }) => theme.text.default};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.text.default};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Bold = styled.span`
  color: ${({ theme }) => theme.text.default};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.text.default};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Small = styled.small`
  color: ${({ theme }) => theme.text.default};
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.text.default};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.75;
  margin: 0;
  padding: 0;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.default};
  transition: color 300ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;
