// src/app/admin/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { Typography, Box } from "@mui/material";


const Dashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = true; 
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard! Here you can manage your content, view reports, and perform other administrative tasks.
      </Typography>
    </Box>
  </Layout>
  );
};

export default Dashboard;
