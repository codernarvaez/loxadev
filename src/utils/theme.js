import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg.default};
    color: ${({ theme }) => theme.text.default};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  bg: {
    default: "#F4F4F4",
    primary: "#1D5CFC",
    secondary: "#636363",
    icon: "#CBD9EF",
    main: "#3F3F3F",
    card: "#FFFFFF",
    shadow: "#00000029",
  },
  text: {
    default: "#3F3F3F",
    main: "#1C1C1C",
    primary: "#1D5CFC",
    bg: "#F4F4F4",
    icon: "#CBD9EF",
    secondary: "#636363",
    alt: "#FFFFFF",
    danger: "#f44336",
  },
};

export const darkTheme = {
  bg: {
    default: "#F4F4F4",
    primary: "#1D5CFC",
    secondary: "#636363",
    icon: "#CBD9EF",
    main: "#3F3F3F",
    card: "#FFFFFF",
    shadow: "#00000029",
  },
  text: {
    default: "#3F3F3F",
    main: "#1C1C1C",
    primary: "#1D5CFC",
    bg: "#F4F4F4",
    icon: "#CBD9EF",
    secondary: "#636363",
  },
};
