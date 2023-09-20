import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");
  const [formattedUsers, setFormattedUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [sortMode, setSortMode] = useState({
    type: "points",
    direction: "desc",
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
    setDisplayedUsers(formattedUsers);
  }, [sortMode, userObjects]);

  useEffect(() => {
    const filteredUsers = formattedUsers.filter((user) => {
      const searchKeywords = search.toLowerCase().split(" ");
      return searchKeywords.every((keyword) =>
        user.firstName.toLowerCase().includes(keyword)
      );
    });
    setDisplayedUsers(filteredUsers);
  }, [search, formattedUsers]);

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <DashboardHeader
          search={search}
          sortMode={sortMode}
          handleSearch={handleSearch}
          setSortMode={setSortMode}
        />
        <DashboardLeaderboards users={displayedUsers} />
      </div>
    </section>
  );
}
