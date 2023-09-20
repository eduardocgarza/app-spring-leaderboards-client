import React from "react";

export default function TextInputType(props) {
  const { title, name, placeholder, value, handleTextInput, required } = props;
  return (
    <div className="w-full mr-2">
      {title && (
        <label
          htmlFor={title.toLowerCase()}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {title}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-full px-4 py-2.5"
        onChange={handleTextInput}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  );
}
