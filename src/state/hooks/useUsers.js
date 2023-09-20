import { useEffect, useState } from "react";
import Logger from "../../constants/Logger";
import { publicRouter } from "../../network/ServerRouter";
import { getAllUsersEndpoint } from "../../network/routes/usersRoutes";

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

  return {
    userObjects,
  };
}
