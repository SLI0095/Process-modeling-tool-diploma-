import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { History, Info, MultipleStop, Settings } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router";

export default function WorkItemSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + 1 + "/workItems/" + 1);
    }
    if (newValue === "states") {
      navigate("/user/" + 1 + "/workItems/" + 1 + "/states");
    }
    if (newValue === "history") {
      navigate("/user/" + 1 + "/workItems/" + 1 + "/history");
    }
    if (newValue === "settings") {
      navigate("/user/" + 1 + "/workItems/" + 1 + "/settings");
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Main info"
          value="main"
          icon={<Info />}
        />
        <BottomNavigationAction
          label="States"
          value="states"
          icon={<MultipleStop />}
        />
        <BottomNavigationAction
          label="History"
          value="history"
          icon={<History />}
        />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<Settings />}
        />
      </BottomNavigation>
    </Paper>
  );
}
