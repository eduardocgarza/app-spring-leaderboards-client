import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUserHeader(props) {
  /**
   * @Props
   */
  const { creating, handleCreateSingle, handleCreateMultiple } = props;

  /**
   * @Hooks
   */
  const navigate = useNavigate();

  /**
   * @Methods
   */
  function handleCancel() {
    navigate(-1);
  }

  return (
    <header className="bg-white px-[40px] py-5 rounded-[20px] flex flex-col sm:flex-row justify-between items-center mb-6 shadow-md blur-2 text-opacity-15 spread-0 w-full">
      <h1 className="mb-6 sm:mb-0 text-2xl font-semibold">New User</h1>
      <div className="flex">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mx-2 text-xs transition duration-500 ease-in-out"
          onClick={handleCreateSingle}
          disabled={creating}
        >
          Create
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full mx-2 text-xs transition duration-500 ease-in-out"
          onClick={handleCreateMultiple}
          disabled={creating}
        >
          Create Multiple
        </button>
        <button
          className="border-2 border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-full mx-2 text-xs transition duration-500 ease-in-out"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </header>
  );
}
