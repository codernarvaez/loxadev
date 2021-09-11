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
    switch: "#FFFFFF",
    shadow: "#00000029",
    white: "#FFFFFF",
    danger: "#f44336",
    success: "#1DFC94",
    info: "#CBD9EF",
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
    default: "#1D2029",
    primary: "#6892FD",
    secondary: "#F4F4F4",
    icon: "#CBD9EF",
    main: "#3F3F3F",
    card: "#252843",
    shadow: "#00000029",
  },
  text: {
    default: "#9F9F9F",
    main: "#FFFFFF",
    primary: "#8EAEFE",
    bg: "#F4F4F4",
    icon: "#CBD9EF",
    secondary: "#F4F4F4",
    alt: "#FFFFFF",
    danger: "#f44336",
  },
};
