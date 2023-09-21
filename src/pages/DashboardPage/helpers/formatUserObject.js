export default function formatUserObjects(userObjects) {
  return userObjects.map((user) => {
    return {
      userID: user.userID,
      username: user.username,
      firstName: user.firstName,
      points: user.points,
    };
  });
}
