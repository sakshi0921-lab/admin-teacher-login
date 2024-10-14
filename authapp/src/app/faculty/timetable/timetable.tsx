"use client";

import React, { useState } from 'react';
import { Box,TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowId, GridRowModel } from '@mui/x-data-grid';
import Sidebar from '../components/Sidebar'; 
import { useTheme } from '@mui/material/styles';

interface TimetableRow {
  id: number;
  day: string;
  subject: string;
  time: string;
  notes?: string;
}

const Timetable: React.FC = () => {
  const theme = useTheme();
  const sidebarWidth = 240; // Adjust based on your design
  const [rows, setRows] = useState<TimetableRow[]>([
    { id: 1, day: 'Monday', subject: 'Math', time: '9:00 AM', notes: '' },
    { id: 2, day: 'Tuesday', subject: 'Science', time: '11:00 AM', notes: '' },
    { id: 3, day: 'Wednesday', subject: 'English', time: '2:00 PM', notes: '' },
    { id: 4, day: 'Thursday', subject: 'History', time: '12:00 PM', notes: '' },
    { id: 5, day: 'Friday', subject: 'Art', time: '10:00 AM', notes: '' },
  ]);

  const columns: GridColDef[] = [
    { field: 'day', headerName: 'Day', width: 150 },
    { field: 'subject', headerName: 'Subject', width: 150 },
    { field: 'time', headerName: 'Time', width: 150 },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 300,
      renderCell: (params) => (
        <TextField
          variant="outlined"
          size="small"
          value={params.value || ''}
          onChange={(e) => handleNotesChange(params.id, e.target.value)}
        />
      ),
    },
  ];

  const handleNotesChange = (id: GridRowId, value: string) => {
    const numericId = typeof id === 'string' ? parseInt(id) : id; // Ensure the ID is a number

    setRows((prev) =>
      prev.map((row) => (row.id === numericId ? { ...row, notes: value } : row))
    );
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${sidebarWidth}px`,
          width: `calc(100% - ${sidebarWidth}px)`,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box m="20px">
          <Typography variant="h4" gutterBottom>
            Timetable
          </Typography>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows as GridRowModel[]}
              columns={columns}
              pagination
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5, // Correctly set the page size here
                  },
                },
              }}
              pageSizeOptions={[5, 10, 15]} // Adjust page size options as needed
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Timetable;
