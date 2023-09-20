import React from "react";
import ScrollToTop from "../helpers/ScrollToTop";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RootBlueprint from "../elements/RootBlueprint";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserItemPage from "../pages/UserItemPage/UserItemPage";
import EditUserItemPage from "../pages/EditUserItemPage/EditUserItemPage";
import CreateUserItemPage from "../pages/CreateUserItemPage/CreateUserItemPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootBlueprint />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="users/new" element={<CreateUserItemPage />} />
          <Route path="users/:username/edit" element={<EditUserItemPage />} />
          <Route path="users/:username" element={<UserItemPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
