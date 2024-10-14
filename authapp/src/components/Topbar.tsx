"use client";

import { Box, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Typography variant="h6">Dashboard</Typography>

      <Box display="flex" alignItems="center">
        <Box ml={45} display="flex" mt={1} mr={0}>
          <IconButton>
            <NotificationsIcon> </NotificationsIcon></IconButton>
        </Box>

        <Box ml={2} mt={1} mr={10}>
        <IconButton>
<AccountCircleIcon /></IconButton>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Topbar;
