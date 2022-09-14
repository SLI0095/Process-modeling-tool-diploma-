import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, Construction } from "@mui/icons-material";
import { useNavigate } from "react-router";

const MyAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openProcesses = () => {
    navigate("/user/" + 1 /*sessionStorage.getItem("userId")*/ + "/processes");
  };

  const openTasks = () => {
    navigate("/user/" + 1 /*sessionStorage.getItem("userId")*/ + "/tasks");
  };

  const openWorkItems = () => {
    navigate("/user/" + 1 /*sessionStorage.getItem("userId")*/ + "/workItems");
  };

  const openRoles = () => {
    navigate("/user/" + 1 /*sessionStorage.getItem("userId")*/ + "/roles");
  };

  const handleLogout = () => {
    sessionStorage.setItem("userId", 0);
    sessionStorage.setItem("userName", "");
    sessionStorage.setItem("isLoggedIn", false);
    navigate("/");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //TODO Uncomment after testing
  /*
  useEffect(() => {
    let loggedIn = sessionStorage.getItem("isLoggedIn");
    let userId = sessionStorage.getItem("userName");
    if (userId === 0 || !loggedIn) {
      navigate("/");
    }
  });
  */

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Construction sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={
              "/user/" + 1 /*sessionStorage.getItem("userId")*/ + "/processes"
            }
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ProMod
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="processes" onClick={openProcesses}>
                <Typography textAlign="center">Processes</Typography>
              </MenuItem>
              <MenuItem key="tasks" onClick={openTasks}>
                <Typography textAlign="center">Tasks</Typography>
              </MenuItem>
              <MenuItem key="workItems" onClick={openWorkItems}>
                <Typography textAlign="center">Work Items</Typography>
              </MenuItem>
              <MenuItem key="roles" onClick={openRoles}>
                <Typography textAlign="center">Roles</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Construction sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ProMod
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="processes"
              onClick={openProcesses}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Processes
            </Button>
            <Button
              key="tasks"
              onClick={openTasks}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Tasks
            </Button>
            <Button
              key="workItems"
              onClick={openWorkItems}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Work Items
            </Button>
            <Button
              key="roles"
              onClick={openRoles}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Roles
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                startIcon={<AccountCircle />}
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white" }}
              >
                {sessionStorage.getItem("userName")}
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Main dashboard</Typography>
              </MenuItem>
              <MenuItem key={"account"} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account settings</Typography>
              </MenuItem>
              <MenuItem key={"logout"} onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyAppBar;
