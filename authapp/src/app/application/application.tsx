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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/layout";

interface RowModel {
  id: number;
  trn: string;
  school: string;
  course: string;
  department: string;
}

const Application = () => {

  const [rows, setRows] = useState<RowModel[]>([
    { id: 1, trn: "TRN001", school: "MRIIRS", course: "Algebra", department: "SCA" },
    { id: 2, trn: "TRN002", school: "MRU", course: "Electrical Engineering", department: "SCA" },
    { id: 3, trn: "TRN003", school: "MRDC", course: "Civil Engineering", department: "Psychology" },
    { id: 4, trn: "TRN004", school: "MRDC", course: "Algebra", department: "Mathematics" },
  ]);

  const [newRow, setNewRow] = useState<Omit<RowModel, "id">>({
    trn: "",
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
      setNewRow({ trn: "", school: "", course: "", department: "" });
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

        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>TRN Number</TableCell>
                <TableCell>School</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.trn}</TableCell>
                  <TableCell>{row.school}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditRow(row.id)} sx={{ color: "#e39b98" }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => confirmDelete(row.id)} sx={{ color: "#53f579" }}>
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
              {newRow.trn ? "Save Changes" : "Add Row"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this entry?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeleteDialog(false)}>No</Button>
            <Button
              onClick={() => rowToDelete !== null && handleDeleteRow(rowToDelete)}
              color="primary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Application;
