"use client";
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '4px',
        mb: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
