


import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";

import { AiFillDashboard } from "react-icons/ai";
import { IoIosCalendar } from "react-icons/io";
import { FaStethoscope } from "react-icons/fa";
import HealingIcon from "@mui/icons-material/Healing";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MdStackedLineChart } from "react-icons/md";

//card


//scroller

import Hcared from "./Hcared";
import { Route, Routes,Link } from "react-router-dom";
import Cals from "./Cals";
import Sccalnder from "./Schedule/Sccalnder";
import Doctor from "./Doctor/Doctor";
import Patient from "./Patient/Patient";
import Preference from "./Preference/Preference";
import About from "./About/About";
import Doctordetails from "./Doctor/Doctordetails";

const drawerWidth = 240;
const Menu = styled(ListItem)`
  font-size: 16px;
  color: gray;
  text-align: center;
  padding: 8px 35px;
  text-decoration: none;
  :hover {
    background-color: #7575ff;
    color: white;
  }
`;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Appointment App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        {/* <Divider /> */}
        <Box style={{ margin: "10px 0px" }}>
          <img
            style={{ borderRadius: "50%" }}
            height="120px"
            width="120px"
            src="https://static.vecteezy.com/system/resources/previews/002/896/807/original/female-doctor-using-her-digital-tablet-free-vector.jpg"
            alt="doc"
          />
          <Typography
            align="center"
            style={{
              fontWeight: "600",
              fontSize: "20px",
              color: "black",
              marginTop: "10px",
            }}
          >
            Jane Doe
          </Typography>
          <Typography
            align="center"
            style={{ color: "gray", marginTop: "20px" }}
          >
            Admin
          </Typography>
        </Box>
        <Divider />

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <List style={{ textAlign: "center" }}>
            <Link to='/'style={{textDecoration:"none"}} ><Menu
              style={{ margin: "8px 0px", fontSize: "16px", fontWeight: "520",textDecoration:'none' }}
            >
              {" "}
            <AiFillDashboard
                style={{ marginRight: "20px", fontSize: 25,textDecoration:"none" }}
              />{" "}
              Dashborad{" "}
            </Menu></Link>
           
            <Link to='/sccal'style={{textDecoration:"none"}}> <Menu style={{ margin: "8px 0px" }}>
              <IoIosCalendar style={{ marginRight: "20px", fontSize: 25 }} />{" "}
              Schedule
            </Menu></Link>

            <Link to='/doctor' style={{textDecoration:"none"}}>
            <Menu style={{ margin: "8px 0px" }}>
              {" "}
              <FaStethoscope
                style={{ marginRight: "20px", fontSize: 25 }}
              />{" "}
              Doctor
            </Menu></Link>
           <Link to='/patient' style={{textDecoration:"none"}}> <Menu style={{ margin: "8px 0px" }}>
              {" "}
              <HealingIcon style={{ marginRight: "20px", fontSize: 25 }} />{" "}
              Patients
            </Menu></Link>
           <Link to='/preference'style={{textDecoration:"none"}}>
           <Menu style={{ margin: "8px 0px" }}>
              {" "}
              <MdStackedLineChart
                style={{ marginRight: "20px", fontSize: 25, color: "gray" }}
              />{" "}
              Preference
            </Menu>
           </Link>
          <Link to='/about' style={{textDecoration:"none"}}>  <Menu style={{ margin: "8px 0px" ,textDecoration:"none"}}>
              {" "}
              <InfoOutlinedIcon
                style={{ marginRight: "20px", fontSize: 25, color: "gray",textDecoration:"none" }}
              />
              About
            </Menu></Link>
          </List>
        </Box>

        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      
        


        <Box>
         <Routes> 
         <Route path="/" element={<Hcared/>} />
         <Route path="/calander" element={<Cals/>}/>
         <Route path="/sccal" element={<Sccalnder/>}/>
         <Route path="/doctor" element={<Doctor/>}/>
         <Route path="/patient" element={<Patient/>}/>
         <Route path="/preference" element={<Preference/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/doctor/doctordeatils/:id" element={<Doctordetails/>}/>


           
         
        </Routes>
          </Box>     



      </Main>
    </Box>
  );
}
