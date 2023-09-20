import React from "react";
import UserListItem from "./UserListItem";

export default function DashboardLeaderboards(props) {
  const { users } = props;

  return (
    <section>
      {users &&
        users.map((user) => <UserListItem key={user.userID} user={user} />)}
    </section>
  );
}
