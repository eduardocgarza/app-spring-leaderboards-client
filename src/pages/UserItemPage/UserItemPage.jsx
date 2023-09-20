import React, { useEffect, useState } from "react";
import moment from "moment";
import useAppContext from "../../state/AppContext";
import { useParams } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

export default function EditUserItemPage() {
  /**
   * @State
   */
  const [selectedUser, setSelectedUser] = useState(null);

  /**
   * @Params
   */
  const { username } = useParams();

  /**
   * @Hooks
   */
  const appContext = useAppContext();
  const { usersEntity } = appContext;
  const { userObjects } = usersEntity;

  /**
   * @X
   */
  useEffect(() => {
    const selectedUser = userObjects.find(
      (userObject) => userObject.username === username
    );
    if (!selectedUser) return;

    setSelectedUser(selectedUser);
  }, [userObjects, username]);

  if (!selectedUser) return null;
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center w-full lg:max-w-[800px] mx-auto px-4">
      <div className="bg-white p-[40px] rounded-[20px] shadow-md blur-2 text-opacity-15 spread-0 w-full">
        <header className="flex flex-col justify-center items-center flex-1 mb-6">
          <div className="mb-4 bg-purple-600 rounded-3xl p-6 mx-auto">
            <UserIcon className="w-16 h-16 text-gray-50" />
          </div>
          <h2 className="text-2xl font-semibold text-center w-full">
            {selectedUser.firstName}
          </h2>
        </header>
        <section>
          <div className="mb-4">
            <h3 className="font-medium text-sm mb-2">Username</h3>
            <div className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-full px-4 py-2.5">
              {selectedUser.username}
            </div>
          </div>
          {selectedUser.address && (
            <div className="mb-4">
              <h3 className="font-medium text-sm mb-2">Address</h3>
              <div className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-full px-4 py-2.5 mb-4">
                {selectedUser.address}
              </div>
            </div>
          )}
          {selectedUser.dateBirth && (
            <div className="mb-4">
              <h3 className="font-medium text-sm mb-2">Age</h3>
              <div className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-full px-4 py-2.5 mb-4">
                {new Date().getFullYear() -
                  new Date(selectedUser.dateBirth).getFullYear()}
              </div>
            </div>
          )}
          {selectedUser.dateBirth && (
            <div className="mb-4">
              <h3 className="font-medium text-sm mb-2">Date of Birth</h3>
              <div className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-full px-4 py-2.5 mb-4">
                {moment(selectedUser.dateBirth).format("MMMM Do YYYY")}
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
