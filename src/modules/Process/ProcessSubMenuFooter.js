import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountTree,
  FormatListNumbered,
  History,
  Info,
  People,
  Settings,
  Straighten,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router";

export default function ProcessSubMenuFooter(props) {
  const [value] = React.useState(props.state);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === "main") {
      navigate("/user/" + 1 + "/processes/" + 1);
    }
    if (newValue === "metrics") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/metrics");
    }
    if (newValue === "workflow") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/workflow");
    }
    if (newValue === "activities") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/activities");
    }
    if (newValue === "rasci") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/rasci");
    }
    if (newValue === "history") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/history");
    }
    if (newValue === "settings") {
      navigate("/user/" + 1 + "/processes/" + 1 + "/settings");
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
          label="Metrics"
          value="metrics"
          icon={<Straighten />}
        />
        <BottomNavigationAction
          label="Workflow"
          value="workflow"
          icon={<AccountTree />}
        />
        <BottomNavigationAction
          label="Activities"
          value="activities"
          icon={<FormatListNumbered />}
        />
        <BottomNavigationAction
          label="RASCI matrix"
          value="rasci"
          icon={<People />}
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
