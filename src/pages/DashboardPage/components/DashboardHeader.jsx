import React from "react";
import TextInputType from "../../../components/general/TextInputType";

const arrowUp = "↑";
const arrowDown = "↓";

export default function DashboardHeader(props) {
  const { search, handleSearch, sortMode, setSortMode } = props;

  function toggleSortName() {
    if (sortMode.type === "name") {
      setSortMode({
        type: "name",
        direction: sortMode.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortMode({
        type: "name",
        direction: "asc",
      });
    }
  }

  function toggleSortPoints() {
    if (sortMode.type === "points") {
      setSortMode({
        type: "points",
        direction: sortMode.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortMode({
        type: "points",
        direction: "desc",
      });
    }
  }
  
  return (
    <header className="flex flex-col-reverse md:flex-row justify-between items-center mb-6">
      <section className="w-[400px]">
        <TextInputType
          placeholder="Search"
          handleTextInput={handleSearch}
          required={true}
          name="search"
          value={search}
        />
      </section>
      <section className="mb-4 md:mb-0">
        <button
          onClick={toggleSortName}
          className={`bg-white rounded-full py-2 px-4 text-xs shadow-sm mr-2 text-gray-800 hover:shadow-md transition duration-500 ease-in-out border-2 ${
            sortMode.type === "name" ? "border-blue-600" : "border-white-600"
          }`}
        >
          Sort by Name{" "}
          {sortMode.type === "name" && sortMode.direction === "asc"
            ? arrowUp
            : arrowDown}
        </button>
        <button
          onClick={toggleSortPoints}
          className={`bg-white rounded-full py-2 px-4 text-xs shadow-sm mr-2 text-gray-800 hover:shadow-md transition duration-500 border-2 ${
            sortMode.type === "points" ? "border-blue-600" : "border-white-600"
          }`}
        >
          Sort by Points{" "}
          {sortMode.type === "points" && sortMode.direction === "asc"
            ? arrowUp
            : arrowDown}
        </button>
      </section>
    </header>
  );
}
