"use client";
import { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, Grid } from "@mui/material";
import TeamTable from "./TeamTable";
import Layout from "../components/layout"; 
import AddIcon from '@mui/icons-material/Add';

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
      <Box p={4}>
        {/* Improved Heading Section */}
        <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold">
          Team Management
        </Typography>

        {/* Centering Add New Button */}
        <Box textAlign="center" my={4}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />} 
            onClick={handleOpen} 
            sx={{ paddingX: 3, paddingY: 1.5 }}
          >
            Add New Team Member
          </Button>
        </Box>

        {/* Team Table */}
        <TeamTable teamMembers={teamMembers} />
        
        {/* Modal for Adding New Team Member */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: 320, sm: 400 },
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2, // Adding some border-radius for rounded edges
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">
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

              <Grid item xs={12} mt={2} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mr: 2, px: 4, py: 1 }}
                >
                  Add
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                  sx={{ px: 4, py: 1 }}
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
