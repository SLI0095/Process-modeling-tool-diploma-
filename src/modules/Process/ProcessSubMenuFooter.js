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

export default function ProcessSubMenuFooter() {
  const [value, setValue] = React.useState("main");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //TODO set routing + accept props
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
