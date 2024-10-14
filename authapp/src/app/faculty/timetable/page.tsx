// app/timetable/page.tsx
"use client"
import React from 'react';
import Timetable from './timetable';
import { Box, Typography } from '@mui/material';

const TimetablePage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Teacher Timetable
      </Typography>
      <Timetable />
    </Box>
  );
};

export default TimetablePage;
