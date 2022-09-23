import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import DraggableActivityList from "../../modules/Process/DraggableActivityList";

export default function ProcessActivities() {
  //TODO reorder items
  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    return;
    /*const newItems = reorder(items, source.index, destination.index);
        setItems(newItems);*/
  };

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <DraggableActivityList
          activities={[
            {
              id: 1,
              name: "Task1",
              description: "Description",
              type: "task",
            },
            {
              id: 2,
              name: "Task2",
              description: "Description",
              type: "task",
            },
            {
              id: 3,
              name: "Process1",
              description: "Description",
              type: "process",
            },
            {
              id: 4,
              name: "Process2",
              description: "Description",
              type: "process",
            },
          ]}
          onDragEnd={onDragEnd}
        />
      </Container>
      <ProcessSubMenuFooter state="activities" />
    </>
  );
}
