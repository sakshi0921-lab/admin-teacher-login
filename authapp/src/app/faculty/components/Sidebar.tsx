"use client";

import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"; // New Icon
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Attendance icon
//import AssignmentIcon from '@mui/icons-material/Assignment'; // Assignment icon
//import ScheduleIcon from '@mui/icons-material/Schedule'; // Timetable icon
import { Assignment } from "@mui/icons-material";


const FacultySidebar: React.FC = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
 
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${theme.palette.background.paper} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "#070708 !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#070708 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        width: isCollapsed ? 80 : 240,
        backgroundColor: theme.palette.background.paper,
        height: "102vh",
        transition: "width 0.3s",
        overflow: "hidden",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ borderBottom: `2px solid ${theme.palette.divider}` }}
      >
        {!isCollapsed && (
          <Typography variant="h5" color={theme.palette.text.primary}>
            Faculty Dashboard
          </Typography>
        )}
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {!isCollapsed && (
        <Box mb="50px" textAlign="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              alt="profile-user"
              width="50"
              height="90"
              src={`/user.png`}
              style={{ cursor: "pointer", borderRadius: "100%", marginTop: 20 }}
            />
          </Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
          </Typography>
          <Typography variant="h5" color={theme.palette.success.main}>
            Faculty
          </Typography>
        </Box>
      )}

      <Box mt={2} paddingLeft={isCollapsed ? undefined : "10%"}>
        <SidebarItem
          href="/faculty/dashboard"
          icon={<HomeOutlinedIcon />}
          text="Dashboard"
          collapsed={isCollapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
          variant="h6"
          color={theme.palette.text.secondary}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Faculty Tasks
        </Typography>
        <SidebarItem
          href="/faculty/courses"
          icon={<SchoolOutlinedIcon />}  
          text="Courses"
          collapsed={isCollapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <SidebarItem
          href="/faculty/students"
          icon={<PeopleOutlinedIcon />}
          text="Scholars"
          collapsed={isCollapsed}
          selected={selected}
          setSelected={setSelected}
        />
        
        <SidebarItem
          href="/faculty/reports"
          icon={<TimelineOutlinedIcon />}
          text="Reports"
          collapsed={isCollapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <SidebarItem href="/faculty/assignment"
        icon={<Assignment/>}
        text="Assignment"
        collapsed={isCollapsed}
        selected={selected}
        setSelected={setSelected}>

        </SidebarItem>
        <SidebarItem href="/faculty/attendance"
         icon={<CheckCircleOutlineIcon/>}
         text="Attendance"
         collapsed={isCollapsed}
         selected={selected}
         setSelected={setSelected}
        ></SidebarItem>
      </Box>
    </Box>
  );
};

const SidebarItem = ({
  href,
  icon,
  text,
  collapsed,
  selected,
  setSelected,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  collapsed: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <Link href={href} passHref>
    <Box
      onClick={() => setSelected(text)}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#868dfb",
        },
        color: selected === text ? "#6870fa" : "inherit",
      }}
    >
      {icon}
      {!collapsed && <Typography ml={2}>{text}</Typography>}
    </Box>
  </Link>
);

export default FacultySidebar;
