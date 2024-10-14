
"use client"
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { ThemeWrapper } from "./ThemeToggle"

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeWrapper> 
      <Box display="flex">
        <Sidebar />
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Topbar />
          <Box p={3}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeWrapper>
  );
};

export default Layout;

