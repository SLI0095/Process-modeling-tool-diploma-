import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  FilePresent,
  FormatListNumbered,
  History,
  Info,
  People,
  Settings,
} from "@mui/icons-material";
import { Paper } from "@mui/material";

export default function TaskSubMenuFooter(props) {
  const [value, setValue] = React.useState(props.state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //TODO set routing
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
          label="Steps"
          value="steps"
          icon={<FormatListNumbered />}
        />
        <BottomNavigationAction
          label="Work items"
          value="workItems"
          icon={<FilePresent />}
        />
        <BottomNavigationAction label="RASCI" value="rasci" icon={<People />} />
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
