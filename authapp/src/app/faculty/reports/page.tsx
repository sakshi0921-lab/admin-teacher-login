"use client";

import { Box } from "@mui/material";
import Layout from "../components/layout";
import ReportsTable from "./ReportsTable"; // Adjust path if needed

const FacultyReports: React.FC = () => {
  return (
    <Layout>
      <Box p={3}>
        <ReportsTable />
      </Box>
    </Layout>
  );
};

export default FacultyReports;
