import styled from "styled-components";
import { Link } from "components";

export const StyledBreadcrumb = styled.ol`
  padding: 0;
  margin: 0;
`;

export const BreadcrumbItem = styled.li`
  display: inline-block;

  &::after {
    content: ">";
    display: inline-block;
    margin: 0 0.2em;
    color: #959fa5;
  }

  &:last-of-type::after {
    display: none;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: ${({ active, theme }) =>
    active === "true" ? theme.text.secondary : theme.text.primary};
  pointer-events: ${({ active }) => (active === "true" ? "none" : "initial")};
  cursor: ${({ active }) => (active === "true" ? "default" : "pointer")};
`;
