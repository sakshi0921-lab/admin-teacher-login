// src/app/team/page.tsx
"use client"
import { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, Grid } from "@mui/material";
import TeamTable from "./TeamTable";
import Layout from "../../components/layout"; // Adjust path as needed

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

const initialData: TeamMember[] = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' },
];

const TeamPage = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialData);
  const [nextId, setNextId] = useState(initialData.length + 1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName('');
    setRole('');
  };

  const handleSubmit = () => {
    if (name && role) {
      const newMember: TeamMember = {
        id: nextId,
        name,
        role,
      };
      setTeamMembers([...teamMembers, newMember]);
      setNextId(nextId + 1);
      handleClose();
    }
  };

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Team Management
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
          Add New Team Member
        </Button>
        <TeamTable teamMembers={teamMembers} />
        
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Team Member
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Role"
                  variant="outlined"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mr: 2 }}
                >
                  Add
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </Layout>
  );
};

export default TeamPage;
