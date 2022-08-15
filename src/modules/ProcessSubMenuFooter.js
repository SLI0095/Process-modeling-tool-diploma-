import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountTree,
  FormatListNumbered,
  History,
  Info,
  Person,
  Straighten,
} from "@mui/icons-material";

export default function ProcessSubMenuFooter() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //TODO set routing + accept props
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Main info" value="main" icon={<Info />} />
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
        label="History"
        value="history"
        icon={<History />}
      />
      <BottomNavigationAction
        label="User settings"
        value="settings"
        icon={<Person />}
      />
    </BottomNavigation>
  );
}
