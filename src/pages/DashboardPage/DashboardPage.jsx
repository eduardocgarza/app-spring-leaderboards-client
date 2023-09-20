import React, { useEffect } from "react";
import useAppContext from "../../state/AppContext";
import DashboardHeader from "./components/DashboardHeader";
import DashboardLeaderboards from "./components/DashboardLeaderboards";

export default function DashboardPage() {
  /**
   * @Context
   */
  const { usersEntity } = useAppContext();
  const { userObjects } = usersEntity;

  /**
   * @State
   */
  const [formattedUsers, setFormattedUsers] = React.useState([]);
  const [sortMode, setSortMode] = React.useState({
    type: "name",
    direction: "asc",
  });

  useEffect(() => {
    const formattedUsers = userObjects.map((user) => {
      return {
        userID: user.userID,
        username: user.username,
        firstName: user.firstName,
        points: user.points,
      };
    });

    if (sortMode.type === "name") {
      formattedUsers.sort((a, b) => {
        if (sortMode.direction === "asc") {
          return a.firstName.localeCompare(b.firstName);
        } else {
          return b.firstName.localeCompare(a.firstName);
        }
      });
    } else if (sortMode.type === "points") {
      formattedUsers.sort((a, b) => {
        if (sortMode.direction === "asc") {
          return a.points - b.points;
        } else {
          return b.points - a.points;
        }
      });
    }

    setFormattedUsers(formattedUsers);
  }, [sortMode, userObjects]);

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <DashboardHeader sortMode={sortMode} setSortMode={setSortMode} />
        <DashboardLeaderboards users={formattedUsers} />
      </div>
    </section>
  );
}
