"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DownloadIcon from "@mui/icons-material/Download";
import Layout from "../components/layout";

interface Assignment {
  id: number;
  name: string;
  file: File;
}

// Remove toggleTheme from the props
const Assignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newAssignment = {
        id: assignments.length + 1,
        name: selectedFile.name,
        file: selectedFile,
      };
      setAssignments((prev) => [...prev, newAssignment]);
      setSelectedFile(null); 
    }
  };

  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
  };

  return (
    <Layout>
      <Box
        sx={{
          color: theme.palette.text.primary,
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
       }}
      >
        <Box
          sx={{
            backgroundColor: isDarkMode ? "#e7e8dc" : "#636361",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: theme.shadows[5],
            maxWidth: "600px",
            width: "100%",
            color: "black"
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="white"
            textAlign="center"
          >
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <UploadFileIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="h6" color={"white"}>
                Upload Your Assignment
              </Typography>
            </Grid>
            <Grid item>
              <input
                accept=".pdf,.doc,.docx,.txt"
                id="contained-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  color="primary"
                  sx={{
                    padding: "10px 30px",
                    borderRadius: "30px",
                    borderColor: isDarkMode ? "#1976d2" : "#ff4081",
                    ":hover": {
                      backgroundColor: isDarkMode ? "#1976d2" : "#ff4081",
                      color: "white",
                      borderColor: "transparent",
                    },
                  }}
                >
                  Browse
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={handleUpload}
                disabled={!selectedFile}
                sx={{
                  mt: 2,
                  padding: "10px 20px",
                  borderRadius: "30px",
                  color: "white",
                  backgroundColor: isDarkMode ? "black" : theme.palette.success.main,
                  ":hover": {
                    backgroundColor: isDarkMode ? theme.palette.success.light : theme.palette.success.dark,
                  },
                }}
              >
                Upload Assignment
              </Button>
            </Grid>
          </Grid>

          <Box mt={5}>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {assignments.length === 0 ? (
              <Typography textAlign="center">No assignments uploaded yet.</Typography>
            ) : (
              <List>
                {assignments.map((assignment) => (
                  <ListItem
                    key={assignment.id}
                    sx={{
                      justifyContent: "space-between",
                      backgroundColor: isDarkMode ? "#3b3838" : "#9c9797",
                      borderRadius: 1,
                      mb: 1,
                      color: isDarkMode ? "white" : "black",
                    }}
                  >
                    <ListItemText primary={assignment.name} />
                    <IconButton
                      color="secondary"
                      onClick={() => handleDownload(assignment.file)}
                      sx={{
                        ":hover": {
                          backgroundColor: isDarkMode ? "#0059b3" : "#f50057",
                        },
                      }}
                    >

                      <DownloadIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </Box>
      </Box>
      {/* The rest of your JSX */}
    </Layout>
  );
};

export default Assignments;
