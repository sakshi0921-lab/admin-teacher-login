"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../components/layout"
import { Typography, Box } from "@mui/material";


const FacultyDashboard = () => {
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
          Faculty Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your faculty dashboard! Here you can manage your courses, interact with students, and access important academic resources.
        </Typography>
      </Box>
    </Layout>
  );
};

export default FacultyDashboard;