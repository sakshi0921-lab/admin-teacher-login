"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Layout from "../components/layout"; // Assuming you have a common Layout component with a sidebar

interface Student {
  id: number;
  name: string;
  attendance: "Present" | "Absent" | null;
  action: string | null;
}

const studentsData: Student[] = [
  { id: 1, name: "John Doe", attendance: null, action: null },
  { id: 2, name: "Jane Smith", attendance: null, action: null },
  { id: 3, name: "Alice Johnson", attendance: null, action: null },
];

const Attendance: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const markAttendance = (id: number, status: "Present" | "Absent") => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, attendance: status, action: status } // Also update the action column
          : student
      )
    );
  };

  return (
    <Layout> {/* Wrapping content inside Layout to preserve sidebar */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Mark Attendance
        </Typography>

        {/* Table for better UI/UX */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="attendance table">
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Action Bar</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  {/* Name Column */}
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>

                  {/* Attendance Action Bar Column */}
                  <TableCell align="center">
                    <Button
                      onClick={() => markAttendance(student.id, "Present")}
                      variant={student.attendance === "Present" ? "contained" : "outlined"}
                      color="primary"
                      sx={{ marginRight: 1 }}
                    >
                      Present
                    </Button>
                    <Button
                      onClick={() => markAttendance(student.id, "Absent")}
                      variant={student.attendance === "Absent" ? "contained" : "outlined"}
                      color="secondary"
                    >
                      Absent
                    </Button>
                  </TableCell>

                  {/* Actions Column */}
                  <TableCell align="center">
                    <Typography
                      sx={{
                        color: student.attendance === "Present" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {student.action || "No Action"}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Attendance;
