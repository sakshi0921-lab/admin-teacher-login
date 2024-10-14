"use client";

import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme"

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  <CssBaseline />
  <Box 
    display="flex"
    justifyContent="flex-end" 
    alignItems="center" 
    p={2} 
    ml={2} 
    mr={3} 
    mt={0} 
    mb={-10} 
  >
    <IconButton onClick={handleThemeToggle} color="inherit">
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  </Box>
  {children}
</ThemeProvider>


  
  );
};

export default ThemeWrapper; 