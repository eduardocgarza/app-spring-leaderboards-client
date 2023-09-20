import React from "react";
import { Outlet } from "react-router-dom";
import TopNavigation from "../components/navigation/TopNavigation";

export default function RootBlueprint() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <TopNavigation />
      <section className="bg-gray-100 relative top-[60px] min-h-[90vh]">
        <Outlet />
      </section>
    </section>
  );
}
