import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";

import DeleteModalListItem from "./DeleteModalListItem";

export default function UserListItem(props) {
  function getDelete(type) {
    if (type === "user") {
      return <DeleteModalListItem />;
    }
    return <></>;
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem>
          <ListItemText primary="Name" />
          <ListItemSecondaryAction>
            {getDelete(props.type)}
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
