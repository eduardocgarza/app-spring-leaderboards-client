import React, { useEffect, useState } from "react";
import useAppContext from "../../state/AppContext";
import DashboardHeader from "./components/DashboardHeader";
import DashboardLeaderboards from "./components/DashboardLeaderboards";
import sortUsers from "./helpers/sortUsers";
import formatUserObjects from "./helpers/formatUserObject";
import searchFilterUsers from "./helpers/searchFilterUsers";

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
    const formattedUsers = formatUserObjects(userObjects);
    sortUsers(sortMode, formattedUsers); // Sorts in-place
    setFormattedUsers(formattedUsers);
    setDisplayedUsers(formattedUsers);
  }, [sortMode, userObjects]);

  useEffect(() => {
    const filteredUsers = searchFilterUsers(search, formattedUsers);
    setDisplayedUsers(filteredUsers);
  }, [search, formattedUsers]);

  function handleSearch(e) {
    setSearch(e.target.value);
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
