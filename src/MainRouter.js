import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Create from "./campaign/Create";
import MyCampaigns from "./campaign/MyCampaigns";
import Details from "./campaign/Details";
import AllCampaigns from "./campaign/AllCampaigns";
import Login from "./campaign/Login";
import Register from "./campaign/Register";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AllCampaigns />} />
          <Route exact path="my-campaigns" element={<MyCampaigns />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="campaigns" element={<MainLayout />}>
          <Route index element={<AllCampaigns />} />
          <Route path=":id" element={<Details />} />
          <Route exact path="create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
