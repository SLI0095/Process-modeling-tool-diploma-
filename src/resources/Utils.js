export function getPath(type) {
  if (type === "role") {
    return "roles/";
  }
  if (type === "process") {
    return "processes/";
  }
  if (type === "task") {
    return "tasks/";
  }
  if (type === "workItem") {
    return "workItems/";
  }
  if (type === "project") {
    return "projects/";
  }
}
