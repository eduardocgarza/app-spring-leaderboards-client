import React, { useEffect, useState } from "react";
import useAppContext from "../../state/AppContext";
import Logger from "../../constants/Logger";
import { useNavigate, useParams } from "react-router-dom";
import { publicRouter } from "../../network/ServerRouter";
import EditUserForm from "./components/EditUserForm";
import FormError from "../../components/general/FormError";
import EditUserHeader from "./components/EditUserHeader";
import editUserValidateForm from "./helpers/editUserValidateForm";
import editUserItemInitialState from "./helpers/editUserItemInitialState";
import { editUserEndpoint } from "../../network/routes/usersRoutes";
import editUserFormChanged from "./helpers/editUserFormChanged";

export default function EditUserItemPage() {
  /**
   * @State
   */
  const [selectedUser, setSelectedUser] = useState(null);
  const [formState, setFormState] = useState(editUserItemInitialState);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  /**
   * @Params
   */
  const { username } = useParams();

  /**
   * @Hooks
   */
  const navigate = useNavigate();
  const appContext = useAppContext();
  const { usersEntity } = appContext;
  const { updateUser, userObjects } = usersEntity;

  /**
   * @Initialize
   */
  useEffect(() => {
    const selectedUser = userObjects.find(
      (userObject) => userObject.username === username
    );
    if (!selectedUser) return;

    setSelectedUser(selectedUser);
    setFormState({
      firstName: selectedUser.firstName || "",
      dateBirth: selectedUser.dateBirth || "",
      address: selectedUser.address || "",
    });
  }, [userObjects, username]);

  /**
   * @Methods
   */
  async function handleEditItem() {
    setError("");
    try {
      const isValid = editUserValidateForm(formState);
      if (!isValid) {
        setError("Please fill out all the required fields");
        return;
      }
      const formChanged = editUserFormChanged(selectedUser, formState);
      if (!formChanged) return;

      /**
       * Edit @User
       */
      const { firstName, dateBirth, address } = formState;
      const formBody = {};
      if (firstName) formBody.firstName = firstName;
      if (dateBirth) formBody.dateBirth = dateBirth;
      if (address) formBody.address = address;

      const route = editUserEndpoint(selectedUser.userID);
      const editUserResponse = await publicRouter.put(route, formBody);
      const newUserResource = editUserResponse.data;
      updateUser(selectedUser.userID, newUserResource);
      return true;
    } catch (error) {
      Logger.error(error);
      setError(String(error));
      return false;
    }
  }

  async function handleEdit() {
    setEditing(true);
    const userEdited = await handleEditItem();
    setEditing(false);

    if (!userEdited) return;
    navigate("/");
  }

  if (!selectedUser) return null;
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center w-full lg:max-w-[800px] mx-auto px-4">
      <EditUserHeader editing={editing} handleEdit={handleEdit} />
      <EditUserForm state={formState} setState={setFormState} />
      <FormError error={error} />
    </section>
  );
}
