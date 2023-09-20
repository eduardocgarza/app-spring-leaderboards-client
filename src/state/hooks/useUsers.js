import { useEffect, useState } from "react";
import Logger from "../../constants/Logger";
import { publicRouter } from "../../network/ServerRouter";
import { getAllUsersEndpoint } from "../../network/routes/userRoutes";

export default function useUsers() {
  /**
   * @State
   */
  const [userObjects, setUserObjects] = useState([]);

  /**
   * @Initialize
   */
  useEffect(() => {
    fetchUsers();
  }, []);

  /**
   * @Methods
   */

  async function fetchUsers() {
    try {
      const response = await publicRouter.get(getAllUsersEndpoint);
      const users = response.data;
      console.log("Users: ", users);
      setUserObjects(users);
    } catch (error) {
      Logger.error(error);
    }
  }

  function createUser(userObject) {
    setUserObjects((prevUserObject) => [...prevUserObject, userObject]);
  }

  function updateUser(userID, userObject) {
    setUserObjects((prevUserObject) =>
      prevUserObject.map((prevUserObject) =>
        prevUserObject.userID === userID ? userObject : prevUserObject
      )
    );
  }

  function deleteUser(userID) {
    setUserObjects((prevUserObject) =>
      prevUserObject.filter(
        (prevUserObject) => prevUserObject.userID !== userID
      )
    );
  }

  function incrementUserPoints(userID) {
    setUserObjects((prevUserObject) =>
      prevUserObject.map((prevUserObject) =>
        prevUserObject.userID === userID
          ? { ...prevUserObject, points: prevUserObject.points + 1 }
          : prevUserObject
      )
    );
  }

  function decrementUserPoints(userID) {
    setUserObjects((prevUserObject) =>
      prevUserObject.map((prevUserObject) =>
        prevUserObject.userID === userID
          ? {
              ...prevUserObject,
              points: Math.max(0, prevUserObject.points - 1),
            }
          : prevUserObject
      )
    );
  }

  return {
    userObjects,
    createUser,
    updateUser,
    deleteUser,
    incrementUserPoints,
    decrementUserPoints,
  };
}
