"use client";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#333131",
      paper: "#302f2f",
    },
    text: {
      primary: "#ebebeb",
    },
  },
  
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#cfc2c2",
      paper: "#e3d5d5",
    },
    text: {
      primary: "#050505",
    },
  },
});

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});