import React, { useState } from "react";
import Logger from "../../constants/Logger";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../state/AppContext";
import { publicRouter } from "../../network/ServerRouter";
import FormError from "../../components/general/FormError";
import CreateUserForm from "./components/CreateUserForm";
import CreateUserHeader from "./components/CreateUserHeader";
import { createUserEndpoint } from "../../network/routes/userRoutes";
import createUserValidateForm from "./helpers/createUserValidateForm";
import createUserItemInitialState from "./helpers/createUserItemInitialState";

export default function CreateUserItemPage() {
  /**
   * @State
   */
  const [formState, setFormState] = useState(createUserItemInitialState);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  /**
   * @Hooks
   */
  const navigate = useNavigate();
  const appContext = useAppContext();
  const { usersEntity } = appContext;
  const { createUser } = usersEntity;

  /**
   * @Methods
   */
  async function handleCreate() {
    setError("");
    try {
      const isValid = createUserValidateForm(formState);

      if (!isValid) {
        setError("Please fill out all the required fields");
        return false;
      }

      /**
       * Create @User
       */
      const { firstName, dateBirth, address } = formState;
      const formBody = {};
      formBody.firstName = firstName;
      if (dateBirth) formBody.dateBirth = dateBirth;
      if (address) formBody.address = address;

      const createUserResponse = await publicRouter.post(
        createUserEndpoint,
        formBody
      );
      const newUserResource = createUserResponse.data;
      createUser(newUserResource);
      return true;
    } catch (error) {
      Logger.error(error);
      setError(String(error));
      return false;
    }
  }

  function handleClear() {
    setFormState(createUserItemInitialState);
  }

  async function handleCreateSingle() {
    setCreating(true);
    const accountCreated = await handleCreate();
    setCreating(false);

    if (!accountCreated) return;
    navigate("/");
  }

  async function handleCreateMultiple() {
    setCreating(true);
    const accountCreated = await handleCreate();
    setCreating(false);

    if (!accountCreated) return;
    handleClear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center w-full lg:max-w-[800px] mx-auto px-4">
      <div className="container mx-auto">
        <CreateUserHeader
          creating={creating}
          handleCreateSingle={handleCreateSingle}
          handleCreateMultiple={handleCreateMultiple}
        />
        <CreateUserForm state={formState} setState={setFormState} />
        <FormError error={error} />
      </div>
    </section>
  );
}
