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
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import PolylineIcon from "@mui/icons-material/Polyline";
import DownloadIcon from "@mui/icons-material/Download";
import GamepadIcon from "@mui/icons-material/Gamepad";
import GridViewIcon from "@mui/icons-material/GridView";

import ListItemText from "@mui/material/ListItemText";
import { Outlet, Link } from "react-router-dom";
import imgIguess from "../../imgs/uwm_logo.svg";
import "../../App.css";

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
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

  const listIcons = [
    <PersonIcon sx={{ color: "white" }} />,
    <MailIcon sx={{ color: "white" }} />,
    <PolylineIcon sx={{ color: "white" }} />,
    <InboxIcon sx={{ color: "white" }} />,
    <DownloadIcon sx={{ color: "white" }} />,
    <GamepadIcon sx={{ color: "white" }} />,
    <GridViewIcon sx={{ color: "white" }} />
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#005f9e" }}>
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
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "white" }}
          >
            Selenium Playground
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
            backgroundColor: "#F7F7F7",
            overflowY: "scroll",
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundImage: `url(${imgIguess})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <nav role="navigation" aria-label="Mobile Menu">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </nav>
        </DrawerHeader>
        <List sx={{ backgroundColor: "#005f9e" }}>
          <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
            Elements
          </Typography>
          <Divider color="white" />
          {[
            "About",
            "Email",
            "Rendered",
            "Transfer-list",
            "Upload-Download",
            "Buttons",
            "DataGrid"
          ].map((text, index) => (
            <Link
              to={text}
              key={text}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {listIcons[index] || <InboxIcon sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider color='white' /> */}
        <List sx={{ backgroundColor: "#005f9e" }}>
          <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
            Form
          </Typography>
          <Divider color="white" />
          {["Practice-Form"].map((text, index) => (
            <Link
              to={text}
              key={text}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {listIcons[index] || <InboxIcon sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider /> */}
        <List sx={{ backgroundColor: "#005f9e" }}>
          <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
            Alerts & Windows
          </Typography>
          <Divider color="white" />
          {["Browser-Windows", "Alerts", "BrokenLink"].map((text, index) => (
            <Link
              to={text}
              key={text}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {listIcons[index] || <InboxIcon sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <List sx={{ backgroundColor: "#005f9e" }}>
          <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
            Widgets
          </Typography>
          <Divider color="white" />
          {["Accordion", "Slider", "Progress-Bar", "Tool-Tips"].map(
            (text, index) => (
              <Link
                to={text}
                key={text}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {listIcons[index] || (
                        <InboxIcon sx={{ color: "white" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Drawer>
      <Main open={open} sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
        <DrawerHeader />

        <Outlet />
      </Main>
    </Box>
  );
}
