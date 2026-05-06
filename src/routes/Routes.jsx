import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainSiteLayout from "../pages/layout/MainSiteLayout";
import Home from "../pages/HOme";

// import React from 'react'

export default function MyApplicationRoutes() {
  return (
    <Routes>
      <Route element={<MainSiteLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
