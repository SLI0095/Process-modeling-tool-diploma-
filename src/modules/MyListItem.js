import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit } from "@mui/icons-material";

export default function MyListItem() {
  const handleEdit = () => {};

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem>
          <ListItemText primary="Name" secondary="Description" />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              id="edit-button"
              onClick={() => handleEdit()}
            >
              <Edit />
            </IconButton>
            <IconButton
              aria-label="remove"
              id="remove-button"
              onClick={() => handleEdit()}
              sx={{
                marginLeft: 2,
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {/* <ListItem secondaryAction={<ListItemMenu />}>
          <ListItemText primary="Name" secondary="Description" />
        </ListItem>*/}
      </Paper>
    </>
  );
}
