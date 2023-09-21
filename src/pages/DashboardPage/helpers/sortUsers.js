export default function sortUsers(sortMode, users) {
  if (sortMode.type === "name") {
    users.sort((a, b) => {
      if (sortMode.direction === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
  } else if (sortMode.type === "points") {
    users.sort((a, b) => {
      if (sortMode.direction === "asc") {
        return a.points - b.points;
      } else {
        return b.points - a.points;
      }
    });
  }
}
