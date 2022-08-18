import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { History, Info, MultipleStop, Settings } from "@mui/icons-material";

export default function WorkItemSubMenuFooter() {
  const [value, setValue] = React.useState("main");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //TODO set routing + accept props
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Main info" value="main" icon={<Info />} />
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
  );
}
