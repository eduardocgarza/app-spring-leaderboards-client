import React from "react";
import TextInputType from "../../../components/general/TextInputType";

export default function CreateUserForm(props) {
  const { state, setState } = props;
  const { firstName, address, dateBirth } = state;

  function handleTextInput(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="bg-white p-[40px] rounded-[20px] shadow-md blur-2 text-opacity-15 spread-0 w-full">
      <header className="flex items-center flex-1 mb-6">
        <h2 className="text-2xl font-semibold">User Info</h2>
      </header>
      <div>
        <TextInputType
          title="First Name"
          placeholder="Elon"
          handleTextInput={handleTextInput}
          required={true}
          name="firstName"
          value={firstName}
        />
        <TextInputType
          title="Address"
          placeholder="San Francisco, CA"
          handleTextInput={handleTextInput}
          required={true}
          name="address"
          value={address}
        />
        <TextInputType
          title="Date of Birth"
          placeholder="YYYY-MM-DD"
          handleTextInput={handleTextInput}
          required={false}
          name="dateBirth"
          value={dateBirth}
        />
      </div>
    </div>
  );
}
