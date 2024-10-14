"use client";

import { Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DownloadIcon from "@mui/icons-material/Download";

const ReportsTable: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    { field: 'trn', headerName: 'TRN', flex: 1, minWidth: 120 },
    { field: 'course', headerName: 'Course', flex: 1, minWidth: 150 },
    {
      field: 'researchPaper',
      headerName: 'Research Paper',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          href={params.value}
          download
        >
          Download
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: 'Radhika Sharma',
      trn: '12345',
      course: 'Computer Science',
      researchPaper: '/papers/research-paper-1.pdf', 
    },
    {
      id: 2,
      name: 'Shruti Singh',
      trn: '67890',
      course: 'Mathematics',
      researchPaper: '/papers/research-paper-2.pdf',
    },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>
        Scholar Reports
      </Typography>
      <Box
        sx={{
          height: 400,
          '& .MuiDataGrid-root': {
            backgroundColor: 'white',
            color:'black'
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#020203',
            color:"white"
          },
        }}
      >
        <DataGrid 
          rows={rows} 
          columns={columns} 
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 }
            }
          }}
          pageSizeOptions={[5]} 
          
          disableRowSelectionOnClick 
        />
      </Box>
    </Box>
  );
};

export default ReportsTable;
