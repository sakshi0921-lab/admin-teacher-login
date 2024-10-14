"use client";
import { useState } from "react";
import { Box, Button, Typography, useTheme, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Layout from "../../components/layout";  

interface TeamMember {
  id: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  accessLevel: string;
}

const mockDataTeam: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Priyanka Singh",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    accessLevel: "admin",
  },
];

const Team = () => {
  const theme = useTheme();
  const [rows, setRows] = useState<TeamMember[]>(mockDataTeam);
  const [openDialog, setOpenDialog] = useState(false);
  const [newAdmin, setNewAdmin] = useState<TeamMember>({
    id: rows.length + 1,
    name: "",
    age: 0,
    phone: "",
    email: "",
    accessLevel: "admin",
  });

  const handleOpenDialog = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAdmin = () => {
    setRows((prev) => [...prev, { ...newAdmin, id: rows.length + 1 }]);
    setNewAdmin({
      id: rows.length + 1,
      name: "",
      age: 0,
      phone: "",
      email: "",
      accessLevel: "admin",
    });
    handleClose();
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                row.accessLevel === "admin"
                  ? theme.palette.success.dark
                  : row.accessLevel === "manager"
                  ? theme.palette.success.main
                  : theme.palette.success.light,
              borderRadius: "5px",
              marginTop: "8px",
            }}
          >
            {row.accessLevel === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {row.accessLevel === "manager" && <SecurityOutlinedIcon />}
            {row.accessLevel === "user" && <LockOpenOutlinedIcon />}
            <Typography color={theme.palette.common.black} sx={{ ml: "5px" }}>
              {row.accessLevel}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Layout>
      <Box m="20px">
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Add Admin
        </Button>

        <Box
          m="40px 20px 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { 
              border: "none",
              backgroundColor: theme.palette.background.default, // Adjust background to match your theme
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              backgroundColor: '#column-name-bg-color',
              color: 'black',
            },
            "& .name-column--cell": {
              color: theme.palette.background.paper, // Name column text color will match column header background
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.mode === 'dark' 
              ? theme.palette.background.paper
              : '#918c8c',
            color: theme.palette.mode === 'dark' ? '#918c8c' : theme.palette.text.primary, 
            borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.default, 
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: theme.palette.background.paper, 
            },
            "& .MuiCheckbox-root": {
              color: theme.palette.primary.main, 
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>

        {/* Dialog for adding admin */}
        <Dialog
          open={openDialog}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.paper, // Dialog background color to match theme
              color: theme.palette.text.primary, // Text color inside the dialog
            },
          }}
        >
          <DialogTitle sx={{ color: theme.palette.text.primary }}>Add New Admin</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              name="name"
              value={newAdmin.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              InputLabelProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.divider, 
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.text.secondary, 
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Age"
              name="age"
              type="number"
              value={newAdmin.age}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              InputLabelProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.divider, 
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.text.secondary, 
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              value={newAdmin.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              InputLabelProps={{
                sx: { color: theme.palette.text.primary }, 
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.divider, // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.text.secondary, // Border color on hover
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              value={newAdmin.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: theme.palette.text.primary }, // Text color
              }}
              InputLabelProps={{
                sx: { color: theme.palette.text.primary }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.divider, // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.text.secondary, // Border color on hover
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddAdmin} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Team;
