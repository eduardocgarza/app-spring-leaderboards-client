import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logger from "../../../constants/Logger";
import useAppContext from "../../../state/AppContext";
import {
  MinusIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  decrementUserPointsEndpoint,
  deleteUserEndpoint,
  incrementUserPointsEndpoint,
} from "../../../network/routes/usersRoutes";

export default function UserListItem(props) {
  /**
   * @Context
   */
  const { usersEntity } = useAppContext();
  const { deleteUser, incrementUserPoints, decrementUserPoints } = usersEntity;

  /**
   * @Props
   */
  const { user } = props;

  const routeItem = `/users/${user.username}`;
  const editRouteItem = `${routeItem}/edit`;

  async function handleIncrementPoints() {
    try {
      const url = incrementUserPointsEndpoint(user.userID);
      const response = await axios.put(url);
      Logger.log(response);
      incrementUserPoints(user.userID);
    } catch (error) {
      Logger.log(error);
    }
  }

  async function handleDecrementPoints() {
    try {
      const url = decrementUserPointsEndpoint(user.userID);
      const response = await axios.put(url);
      Logger.log(response);
      decrementUserPoints(user.userID);
    } catch (error) {
      Logger.log(error);
    }
  }

  async function handleDelete() {
    try {
      const url = deleteUserEndpoint(user.userID);
      const response = await axios.delete(url);
      Logger.log(response);
      deleteUser(user.userID);
    } catch (error) {
      Logger.log(error);
    }
  }

  return (
    <section
      className="flex bg-white mb-2 rounded-full items-center"
      key={user.userID}
    >
      <header className="flex flex-1 items-center">
        <Link
          to={routeItem}
          className="flex items-center flex-1 px-4 py-3 transition duration-500 ease-in-out mr-2"
        >
          <div className="block p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-500 ease-in-out mr-2">
            <UserIcon className="w-3 h-3 text-white" />
          </div>
          <h3 className="flex-1 mr-4">{user.firstName}</h3>
        </Link>
        <p className="bg-gray-100 rounded-3xl min-w-[50px] px-4 py-2 text-sm">
          {user.points} pts
        </p>
      </header>
      <footer className="flex items-center px-4 py-2">
        <button
          onClick={handleIncrementPoints}
          className="block p-2 mr-1 rounded-full bg-gray-800 hover:bg-gray-900 transition duration-500 ease-in-out"
        >
          <PlusIcon className="text-white w-4 h-4" />
        </button>
        <button
          onClick={handleDecrementPoints}
          className="block p-2 mr-1 rounded-full bg-gray-800 hover:bg-gray-900 transition duration-500 ease-in-out"
        >
          <MinusIcon className="text-white w-4 h-4" />
        </button>
        <Link
          to={editRouteItem}
          className="block p-2 mr-1 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-500 ease-in-out"
        >
          <PencilIcon className="text-white w-4 h-4" />
        </Link>
        <button
          onClick={handleDelete}
          className="block p-2 mr-1 rounded-full bg-red-600 hover:bg-red-700 transition duration-500 ease-in-out"
        >
          <TrashIcon className="text-white w-4 h-4" />
        </button>
      </footer>
    </section>
  );
}
