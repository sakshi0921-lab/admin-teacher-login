"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../components/layout";

interface RowModel {
  id: number;
  batch: string;
  roll_number: string;
  registration_number?: string;
  registration_date?: string;
  enrollment?: string;
  full_name?: string;
  gender?: string;
  date_of_birth?: string;
  adhar_no?: string;
  school_email?: string;
  father_name?: string;
  father_mobile?: string;
  mother_name?: string;
  mother_mobile?: string;
  permanent_address?: string;
  district_State?: string;
  trn: string;
  school: string;
  course: string;
  department: string;
}

const Application = () => {
  const theme = useTheme();
  const [rows, setRows] = useState<RowModel[]>([
    {
      id: 1,
      batch: "2020-25",
      roll_number: "22FTRN1002",
      trn: "TRN001",
      school: "MRIIRS",
      course: "Algebra",
      department: "SCA",
    },
    {
      id: 2,
      batch: "2021-26",
      roll_number: "21FTRN2002",
      trn: "TRN002",
      school: "MRU",
      course: "Electrical Engineering",
      department: "SCA",
    },
  ]);

  const [newRow, setNewRow] = useState<Omit<RowModel, "id">>({
    trn: "",
    batch: "",
    roll_number: "",
    school: "",
    course: "",
    department: "",
  });

  const [openAddDialog, setOpenAddDialog] = useState(false); // Add Row Dialog State
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // Delete Confirmation Dialog State
  const [rowToDelete, setRowToDelete] = useState<number | null>(null);

  const handleAddRow = () => {
    if (newRow.trn && newRow.course) {
      setRows((prevRows) => [
        ...prevRows,
        { id: prevRows.length + 1, ...newRow },
      ]);
      setNewRow({ trn: "", batch: "", roll_number: "", school: "", course: "", department: "" });
      setOpenAddDialog(false);
    }
  };

  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    setOpenDeleteDialog(false);
  };

  const confirmDelete = (id: number) => {
    setRowToDelete(id);
    setOpenDeleteDialog(true);
  };

  const handleEditRow = (id: number) => {
    const rowToEdit = rows.find((row) => row.id === id);
    if (rowToEdit) {
      setNewRow({
        trn: rowToEdit.trn,
        batch: rowToEdit.batch,
        roll_number: rowToEdit.roll_number,
        school: rowToEdit.school,
        course: rowToEdit.course,
        department: rowToEdit.department,
      });
    }
    setOpenAddDialog(true);
  };

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Application Management
        </Typography>

        <Button variant="contained" color="primary" onClick={() => setOpenAddDialog(true)}>
          Add Row
        </Button>

        <TableContainer
          component={Paper}
          sx={{
            marginTop: 3,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#757171",
                }}
              >
                {[
                  "TRN Number",
                  "Batch",
                  "Roll Number",
                  "School",
                  "Course",
                  "Department",
                  "Actions",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontWeight: "bold",
                      padding: 1.5,
                      fontSize: 14,
                      color: theme.palette.mode === "dark" ? "#696666" : "#000000",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#121111" : "#2e2c2c",
                        color:"white"
                    },
                    "&:nth-of-type(even)": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#333" : "#363333",
                    },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <TableCell>{row.trn}</TableCell>
                  <TableCell>{row.batch}</TableCell>
                  <TableCell>{row.roll_number}</TableCell>
                  <TableCell>{row.school}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEditRow(row.id)}
                      sx={{ color: "#e39b98" }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => confirmDelete(row.id)}
                      sx={{ color: "#53f579" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add/Edit Row Dialog */}
        <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
          <DialogTitle>{newRow.trn ? "Edit Row" : "Add New Row"}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="TRN Number"
                  value={newRow.trn}
                  onChange={(e) => setNewRow({ ...newRow, trn: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="Batch"
                  
                  value={newRow.batch}
                  onChange={(e) => setNewRow({ ...newRow, batch: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Roll Number"
                  value={newRow.roll_number}
                  onChange={(e) => setNewRow({ ...newRow, roll_number: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="School"
                  value={newRow.school}
                  onChange={(e) => setNewRow({ ...newRow, school: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Course"
                  value={newRow.course}
                  onChange={(e) => setNewRow({ ...newRow, course: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Department"
                  value={newRow.department}
                  onChange={(e) => setNewRow({ ...newRow, department: e.target.value })}
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
            <Button onClick={handleAddRow} variant="contained" color="primary">
              {newRow.trn ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>Are you sure you want to delete this row?</DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
            <Button
              onClick={() => rowToDelete !== null && handleDeleteRow(rowToDelete)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Application;
