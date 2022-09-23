import { List } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ActivityListItem from "./ActivityListItem";

export default function DraggableActivityList(props) {
  return (
    <>
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <List
              /*sx={{
                backgroundColor: "background.paper",
              }}*/
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.activities.map((activity, index) => (
                <ActivityListItem
                  activity={activity}
                  index={index}
                  key={activity.name}
                />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
