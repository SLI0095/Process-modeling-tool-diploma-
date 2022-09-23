import { ListItem, ListItemText, Paper } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  draggingListItem: {
    background: "rgb(235,235,235)",
  },
});

export default function ActivityListItem(props) {
  const classes = useStyles();
  return (
    <>
      <Draggable draggableId={props.activity.name} index={props.activity.id}>
        {(provided, snapshot) => (
          <Paper
            elevation={3}
            sx={{
              marginBottom: 2,
            }}
            className={snapshot.isDragging ? classes.draggingListItem : ""}
          >
            <ListItem
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <ListItemText
                primary={props.activity.name + " (" + props.activity.type + ")"}
                secondary={props.activity.description}
              />
            </ListItem>
          </Paper>
        )}
      </Draggable>
    </>
  );
}
